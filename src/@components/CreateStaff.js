import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createStaff } from "../@store/auth/Staff.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";

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
      maxWidth: "500px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
       padding: "5px 20px",
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
      position:"relative"
    },
    cancelIcon: {
      cursor: "pointer",
      borderRadius: "20px",
      color: "white",
      backgroundColor: "black",
      padding: "5px",
      position: "absolute",
      top: "20px",
      right: "30px",
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
const CreateStaff=({ open })=> {
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  let dta = {
    email: "",
    password: "",
    firstName: "",
    lastName:"",
  };
  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const [initial, setInitial] = useState("general");
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = (e) => {
    e.preventDefault()
    const {name ,lastName,firstName , password}=form
    if(name!=""&&firstName!=""&&lastName!=""&&password!=""){
      dispatch(createStaff(form, history));
    }
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
    // setInput(e.target.value);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Create Customer</Typography>
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
     <form>
      {initial === "general" && (
        <>
          <OrderTime
            title="Email"
            inputname="email"
            des="The e-mail address your customer will login with"
            handlechange={handlefieldchange}
            req={true}
          />
          <OrderTime
            inputname="password"
            title="Password"
            des="The password your customer will login with. Minimum 5 characters"
            handlechange={handlefieldchange}
            req={false}
          />
          <OrderTime
            inputname="firstName"
            title="First Name"
            des="Confirm the password that your customer will login with"
            handlechange={handlefieldchange}
            req={false}
          />
            <OrderTime
            inputname="lastName"
            title="Last Name"
            des="Confirm the password that your customer will login with"
            handlechange={handlefieldchange}
            req={false}
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
        style={{ overflowY: "auto" }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default CreateStaff;
