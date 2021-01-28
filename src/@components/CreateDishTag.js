import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import { CreateDishes } from "src/@store/dish/Dish.Actions";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
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
        background: "linear-gradient(45deg,red,rgb(61, 54, 54),)",
      },
    },
  })
);
function CreateDishTag({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  let dta = {
    name: "",
    displayName: "",
    description: "",
  };
  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const [initial, setInitial] = useState("general");
  const [input, setInput] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = () => {
    const {name , displayName ,description}=form
    dispatch(CreateDishes(form));
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
    // setInput(e.target.value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h5"
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          Quick Service Settings
        </Typography>
        <CloseIcon
          onClick={handleClose}
          style={{
            cursor: "pointer",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "black",
            padding: "5px",
          }}
        />
      </div>
      <div
        style={{
          margin: "10px 0px",
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
          padding: "10px 0px",
        }}
      >
        <Button
          style={{ backgroundColor: "lightgray" }}
          onClick={() => setInitial("general")}
        >
          General i m dish
        </Button>
        <Button variant="p" onClick={() => setInitial("credential")}>
          Condition
        </Button>
      </div>
      {initial === "general" && (
        <>
          <OrderTime
            title="Name"
            inputname="name"
            des="A unique name for your menu"
            handlechange={handlefieldchange}
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
            title="Name"
            des="A unique name for your menu"
            inputname="name"
          />
          <OrderTime
            button
            btnname="optional"
            title="Display Name"
            des="Will override the unique name in your store"
          />
          <OrderTime
            button
            btnname="optional"
            title="Description"
            des="The number of outstanding orders before an increase in wait time is applied"
          />
        </>
      )}
      <Button className={classes.btn} onClick={handleClick}>
        Save
      </Button>
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

export default CreateDishTag;
