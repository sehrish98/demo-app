import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { MenuCategoryCreate } from "../@store/menu/MenuCategory.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import TimeSlot from "./timeSlot";
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
    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
      "&:focus": {
        outline: "none",
      },
    },
    btnStyle: {
      "&:focus": {
        outline: "none",
      },
    },
  })
);
function CreateCategory({ open, id }) {
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  let dta = {

    name: "",
    displayName: "",
    description: "",
    taxes: 0,
    applicableHours: [],
    hideUnavalaibleMenu: false,
  };
  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const { name, displayName, description } = form;
    form.applicableHours = items;
    let obj=form;
    obj={
      ...form,
      menuId:id
    }

    if (name != "") {
       console.log("I am menu ctegroy",obj)  
      dispatch(MenuCategoryCreate(obj, history));
    }
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
    // setInput(e.target.value);
  };
  const [initial, setInitial] = useState("general");
  const [timeslot, addTimeSlot] = useState(false);
  let [items, setItems] = useState([]);
  function addSlot(e) {
    e.preventDefault();
    addTimeSlot(true);
    setItems([
      ...items,
      {
        id: uuidv4(),
        openTime: "09:00",
        closeTime: "11:00",
        setInput: false,
        days: 1,
      },
    ]);
  }
  const handletimechange = (e, id) => {
    var index = items.findIndex((x) => x.id === id);

    console.log(e.target.type, e.target.checked, e.target.name);
    let g = items[index];
    if (e.target.type === "checkbox") {
      console.log("dssdsd", e.target.checked, e.target.name, g);
      g[e.target.name] = e.target.checked;
    } else {
      console.log("elseeess", e.target.name, g);
      g[e.target.name] = e.target.value;
    }
    if (index === -1) {
    } else setItems([...items.slice(0, index), g, ...items.slice(index + 1)]);
  };

  function deleteSlot(id) {
    setItems((previd) => {
      return previd.filter((item, index) => {
        return item.id != id;
      });
    });
  }

  function copyItem(obj, id) {
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
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Create Category</Typography>
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <div className={classes.allbtn}>
        <Button
          style={{
            backgroundColor: initial == "general" ? "lightgray" : "white",
          }}
          onClick={() => setInitial("general")}
          className={classes.btnStyle}
        >
          General
        </Button>
        <Button
          style={{
            backgroundColor: initial == "credential" ? "lightgray" : "white",
          }}
          variant="p"
          onClick={() => setInitial("credential")}
          className={classes.btnStyle}
        >
          Condition
        </Button>
      </div>

      <form>
        <>
          {initial == "general" && (
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
              />
              <OrderTime
                button
                btnname="optional"
                inputname="description"
                title="Description"
                des="The number of outstanding orders before an increase in wait time is applied"
                handlechange={handlefieldchange}
              />
            </>
          )}
          {initial == "credential" && (
            <>
              <OrderTime
                checked
                title="Hide Unavailable Menu"
                des="Enabling this will hide this menu in your store if it's unavailable. Otherwise, this menu will still be displayed with a warning message that it is not available."
                handlechange={handlefieldchange}
                inputname="hideUnavalaibleMenu"
              />

              <OrderTime
                button
                dropdown
                btnname="optional"
                title="Services"
                des="Select which services this category will be available for. Leave empty to apply for all services. Please double-check with the parent menu's Services setting in Conditions tab because it has a higher priority when any conflict happened."
                handlechange={handlefieldchange}
                options={["Dine in"]}
                inputname="taxes"
              />
              <OrderTime
                btn2
                values="Add Time Slot"
                btnname="optional"
                title="Applicable Hours"
                des="Set which hours this menu will be available for. If no hours entered, the menu is applicable at all times. Enter time in 24H format, e.g. 21:00 for 9:00pm. Ensure time slots do not overlap or close before they open"
                onClick={addSlot}
                handlechange={handlefieldchange}
              />

              <>
                {items.map((item) => {
                  return (
                    item.id && (
                      <TimeSlot
                        key={item.id}
                        id={item.id}
                        Open={item.openTime}
                        Close={item.closeTime}
                        checked={item.setInput}
                        Days={item.days}
                        onAdd={addSlot}
                        Copy={copyItem}
                        onDelete={deleteSlot}
                        handlechange={handletimechange}
                        inputname="applicableHours"
                      />
                    )
                  );
                })}
              </>
            </>
          )}
        </>

        <Button className={classes.btn} onClick={handleClick} type="submit">
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

export default CreateCategory;
