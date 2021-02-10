import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { MenuItemsEdit } from "../@store/menu/Menu.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";

import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import TimeSlot from './timeSlot'


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    maxHeight: "90vh",
    margin: "0 auto",
    overflow: "auto"
  };
}
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "100%",
      maxWidth: "720px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      display: "flex",
      flexDirection: "column",
      margin: "50px auto 150px auto ",
      zIndex: "9999",
    },
    btn: {
      width: "100%",
      backgroundColor: "rgb(238, 82, 82)",
      border: 0,
      color: "white",
      height: 35,
      margin: "3px",
      display: "flex",
      padding: "5px 10px",
      cursor: "pointer",
      marginTop: "30px",
      "&:hover": {
        background: "rgb(238, 82, 82)",
      },
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      marginTop: "10px",
    },
    cancelIcon: {
      cursor: "pointer",
      borderRadius: "20px",
      color: "white",
      backgroundColor: "black",
      padding: "5px",
      position: "absolute",
      top: "-15px",
      right: "-15px",
      fontSize: "xx-large",
      position: "relative",
      zIndex: 1,
    },
    cancelDiv: {
      display: "flex",
      top: "8px",
      right: "10px",
      position: "fixed",
      zIndex: "22"
    },
    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    },
  })
);
function EditMenu({ open, data }) {
  const { name, displayName, description } = data;
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  // let dta = {
  //   name: name,
  //   displayName:displayName,
  //   description:description,
  // };
  useEffect(() => {
    if (data && !form) {
      setForm(data);
    }
  }, [form, setForm]);
  const [initial, setInitial] = useState("general");
  const [timeslot, addTimeSlot] = useState(false)
  let [items, setItems] = useState([])
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = () => {
    const data = {
      menuId: form._id,
      name: form.name,
      displayName: form.displayName,
      description: form.description,
    };
    if(form.name!=""){
    dispatch(MenuItemsEdit(data , history));
    }
  };
  const optionsOrder=["Now","Later"]
  const optionsServices=["pickup","dine in","delivery"]
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
  };
  function addSlot(e) {
    e.preventDefault()
    addTimeSlot(true)
    setItems([...items, {
      id: uuidv4(),
      openTime: "09:00",
      closeTime: "11:00",
      setInput: true,
      days: 1,
    }])
   
  }
  function deleteSlot(id) {
    setItems(previd => {
      return previd.filter((item, index) => {
        return item.id != id;
      })
    })
  }

  function copyItem(obj,id) {
    
    items.map((data)=>{
    
      if(data.id===id){
        Object.assign(data, obj)
      }
    })
    setItems((items)=>{
    return ([...items,{
    id: uuidv4(),
    openTime: obj.openTime,
    closeTime: obj.closeTime,
    days: obj.days,
    setInput: obj.setInput
   }])})

  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography
          variant="h5"
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          Edit Menu
        </Typography>
        
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <div className={classes.allbtn}>
        <Button
          style={{ backgroundColor: "lightgray" }}
          onClick={() => setInitial("general")}
        >
          General
        </Button>
        <Button variant="p" onClick={() => setInitial("credential")}>
          Condition
        </Button>
      </div>
      <form>
      {initial === "general" && (
        <>
          <OrderTime
            title="Name"
            inputname="name"
            des="A unique name for your menu"
            value={form && form.name}
            handlechange={handlefieldchange}
            req={true}
          />
          <OrderTime
            button
            btnname="optional"
            inputname="displayName"
            title="Display Name"
            des="Will override the unique name in your store"
            handlechange={handlefieldchange}
            value={form && form.displayName}
          />
          <OrderTime
            button
            btnname="optional"
            inputname="description"
            title="Description"
            des="The number of outstanding orders before an increase in wait time is applied"
            handlechange={handlefieldchange}
            value={form && form.description}
          />
        </>
      )}
      {initial == "credential" && (
          <>
            <OrderTime
              checked
              title="Hide Unavailable Menu"
              des="Enabling this will hide this menu in your store if it's unavailable. Otherwise, this menu will still be displayed with a warning message that it is not available."
              inputname="name"
            />
            <OrderTime
              button
              //btn={true}
              dropdown
              btnname="optional"
              title="Order Times"
              des="Select which order times this menu will be available for. Leave empty for this menu to apply at all times"
              options={optionsOrder}
            />

            <OrderTime
              button
              btnname="optional"
              dropdown
              title="Services"
              des="Select which services this menu will be available for. Leave empty for this menu to apply for services"
              options={optionsServices}
            />

            <OrderTime
              btn
              values="Add Time Slot"
              btnname="optional"
              title="Applicable Hours"
              des="Set which hours this menu will be available for. If no hours entered, the menu is applicable at all times. Enter time in 24H format, e.g. 21:00 for 9:00pm. Ensure time slots do not overlap or close before they open"
              onClick={addSlot}
            />

            <>{items.map((item) => {
              return item.id && <TimeSlot key={item.id} id={item.id} Open={item.openTime} Close={item.closeTime} checked={item.setInput} Days={item.days} onAdd={addSlot} Copy={copyItem} onDelete={deleteSlot} />
            })}</>
            <OrderTime
              button
              btnname="optional"
              title="Enable Age Restricted Access"
              checked
              des="Enabling this will only allow logged in customers with their age verified to order from this menu. Age verification must be enabled for this feature to work"
            />

            <OrderTime
              button
              btnname="optional"
              title="Enable Pre-orders Only"
              checked
              des="Enabling this will disable immediate orders for this menu and require that people pre-order according to the conditions below"
            />



            <OrderTime
              type="number"
              button
              btnname="optional"
              inputname="displayName"
              title="Pre-order Days In Advance"
              des="Ensures customers must pre-order items from this menu a certain amount of days in advance"
            />
            <OrderTime
              button
              type="time"
              btnname="optional"
              inputname="displayName"
              title="Pre-order Cutoff Time (12H Format)"
              des="Use in conjunction with the above option to ensure customers must place orders before a certain time on the last pre-order day. For example, if you set the cut off to 8:00pm and you require orders 2 day's in advance. For a customer to order for Friday, the latest they can put in their order is at 8:00pm on Wednesday"
            />

          </>
        )}
      <Button className={classes.btn} onClick={handleClick } type="submit">
        Save
      </Button>
      </form>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ overflowY: "auto" }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default EditMenu;
