import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { MenuCategoryItemsEdit } from "../@store/menu/MenuCategoryItems.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";

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
    },
    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    },
  })
);
function EditDish({ open, menuId, menucat, data }) {
  const history = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  useEffect(() => {
    if (data && !form) {
      setForm(data);
    }
  }, [form, setForm]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = () => {
    const obj = {
      menuId: menuId,
      menuCategoryId: menucat,
      menuCategoryItemId: form._id,
      name: form.name,
      price: form.price,
      displayname: form.displayName,
      printName: form.printName,
      description: form.description,
    };
    if(form.name!="" && form.price){
    dispatch(MenuCategoryItemsEdit(obj , history));
    }
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Edit Dish</Typography>
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <div className={classes.allbtn}></div>

      <>
        <OrderTime
          title="Name"
          inputname="name"
          des="A unique name for your menu"
          value={form && form.name}
          handlechange={handlefieldchange}
        />
        <OrderTime
          title="price"
          inputname="price"
          des="A unique name for your menu"
          value={form && form.price}
          handlechange={handlefieldchange}
        />
        <OrderTime
          title="Print name"
          inputname="printName"
          des="A unique name for your menu"
          value={form && form.printName}
          handlechange={handlefieldchange}
        />
        <OrderTime
          button
          btnname="optional"
          inputname="displayName"
          title="Display Name"
          des="Will override the unique name in your store"
          value={form && form.displayName}
          handlechange={handlefieldchange}
        />
        <OrderTime
          button
          btnname="optional"
          inputname="description"
          title="Description"
          des="The number of outstanding orders before an increase in wait time is applied"
          value={form && form.description}
          handlechange={handlefieldchange}
        />
      </>

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

export default EditDish;
