import React, { useState, useEffect, useRef } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { MenuItemsCreate } from "../@store/menu/Menu.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import TimeSlot from "./timeSlot";

import TimeSlot1 from "./timeSlot1";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    maxHeight: "90vh",
    margin: "0 auto",
    overflow: "auto",
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
      "&:focus": {
        outline: "none",
      },
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      marginTop: "10px",
      position: "relative",
    },
    cancelIcon: {
      cursor: "pointer",
      borderRadius: "20px",
      color: "white",
      backgroundColor: "black",
      padding: "5px",
      position: "relative",
      fontSize: "xx-large",
      zIndex: 1,
    },
    cancelDiv: {
      display: "flex",
      top: "8px",
      right: "10px",
      position: "fixed",
      zIndex: "22",
    },
    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    },
    button: {
      outline: "none",
      "&:focus": {
        outline: "none",
      },
    },
  })
);
function CreateMenu({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  let dta = {
    name: "",
    displayName: "",
    description: "",
    orderTimes: 0,
    services: 0,
    applicableHours: [],
    enableAgeRestrictedAccess: false,
    enablePreOrdersOnly: false,
    preOrdersDaysInAdvance: "",
    preOrdersCutoffTime: "",
  };
  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const [initial, setInitial] = useState("general");
  const [timeslot, addTimeSlot] = useState(false);
  let [items, setItems] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  useEffect(() => {}, [initial]);
  const handleClick = (e) => {
    e.preventDefault();
    const { name, displayName, description } = form;
    form.applicableHours = items;
    if (name != "") {
      dispatch(MenuItemsCreate(form, history));
    }
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
  };

  const handletimechange = (e, id) => {
    var index = items.findIndex((x) => x.id === id);

    let g = items[index];
    g[e.target.name] = e.target.value;
    if (index === -1) {
      console.log("no match");
    } else setItems([...items.slice(0, index), g, ...items.slice(index + 1)]);
  };
  const addSlot = (e) => {
    e.preventDefault();
    addTimeSlot(true);
    setItems([
      ...items,
      {
        id: uuidv4(),
        openTime: "09:00",
        closeTime: "11:00",
        setInput: true,
        days: 1,
      },
    ]);
  };
  const deleteSlot = (id) => {
    setItems((previd) => {
      return previd.filter((item, index) => {
        return item.id != id;
      });
    });
  };

  const copyItem = (obj, id) => {
    console.log("safgfdgh",obj)
    items.map((data) => {
      if (data.id === id) {
        Object.assign(data, obj);
      }
    });
    setItems((items) => {
      return [
        ...items,
        {
          id: uuidv4(),
          openTime: obj.openTime,
          closeTime: obj.closeTime,
          days: obj.days,
          setInput: obj.setInput,
        },
      ];
    });
  };
  const optionsOrder = ["Now", "Later"];
  const optionsServices = ["Dine in"];
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Create Menu</Typography>
        <div className={classes.cancelDiv}>
          <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
        </div>
      </div>
      <div className={classes.allbtn}>
        <Button
          style={{
            backgroundColor: initial === "general" ? "lightgray" : "white",
          }}
          className={classes.button}
          onClick={() => setInitial("general")}
        >
          General
        </Button>
        <Button
          style={{
            backgroundColor: initial === "credential" ? "lightgray" : "white",
          }}
          className={classes.button}
          variant="p"
          onClick={() => setInitial("credential")}
        >
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
              req={false}
            />
            <OrderTime
              button
              btnname="optional"
              inputname="description"
              title="Description"
              des="The number of outstanding orders before an increase in wait time is applied"
              handlechange={handlefieldchange}
              req={false}
            />
          </>
        )}
        {initial == "credential" && (
          <>
            <OrderTime
              checked
              title="Hide Unavailable Menu"
              des="Enabling this will hide this menu in your store if it's unavailable. Otherwise, this menu will still be displayed with a warning message that it is not available."
              inputname="hidemenu"
              handlechange={handlefieldchange}
            />
            <OrderTime
              button
              //btn={true}
              dropdown
              btnname="optional"
              title="Order Times"
              des="Select which order times this menu will be available for. Leave empty for this menu to apply at all times"
              options={optionsOrder}
              handlechange={handlefieldchange}
              inputname="orderTimes"
            />

            <OrderTime
              button
              btnname="optional"
              dropdown
              title="Services"
              des="Select which services this menu will be available for. Leave empty for this menu to apply for services"
              options={optionsServices}
              onClickServices={handlefieldchange}
              inputname="services"
            />

            <OrderTime
              btn2
              values="Add Time Slot"
              btnname="optional"
              title="Applicable Hours"
              des="Set which hours this menu will be available for. If no hours entered, the menu is applicable at all times. Enter time in 24H format, e.g. 21:00 for 9:00pm. Ensure time slots do not overlap or close before they open"
              onClick={addSlot}
            />

            <>
              {items.map((item, index) => {
                return (
                  item.id && (
                    <TimeSlot1
                      inputname="applicableHours"
                      key={item.id}
                      index={index}
                      id={item.id}
                      Open={item.openTime}
                      Close={item.closeTime}
                      checked={item.setInput}
                      Days={item.days}
                      onAdd={addSlot}
                      Copy={copyItem}
                      onDelete={deleteSlot}
                      handlechange={handletimechange}
                    />
                  )
                );
              })}
            </>
            <OrderTime
              button
              btnname="optional"
              title="Enable Age Restricted Access"
              checked
              des="Enabling this will only allow logged in customers with their age verified to order from this menu. Age verification must be enabled for this feature to work"
              handlechange={handlefieldchange}
              inputname="enableAgeRestrictedAccess"
            />

            <OrderTime
              button
              btnname="optional"
              title="Enable Pre-orders Only"
              checked
              des="Enabling this will disable immediate orders for this menu and require that people pre-order according to the conditions below"
              handlechange={handlefieldchange}
              inputname="enablePreOrdersOnly"
            />

            <OrderTime
              type="number"
              button
              btnname="optional"
              inputname="preOrdersDaysInAdvance"
              title="Pre-order Days In Advance"
              des="Ensures customers must pre-order items from this menu a certain amount of days in advance"
              handlechange={handlefieldchange}
            />
            <OrderTime
              button
              type="time"
              btnname="optional"
              inputname="preOrdersCutoffTime"
              title="Pre-order Cutoff Time (12H Format)"
              des="Use in conjunction with the above option to ensure customers must place orders before a certain time on the last pre-order day. For example, if you set the cut off to 8:00pm and you require orders 2 day's in advance. For a customer to order for Friday, the latest they can put in their order is at 8:00pm on Wednesday"
              handlechange={handlefieldchange}
            />
          </>
        )}
        <Button className={classes.btn} onClick={handleClick} type="submit">
          Create Menu
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
        style={{ overflow: "scroll", marginTop: "auto" }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default CreateMenu;
