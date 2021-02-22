import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography, AppBar } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TitleValue from "./TitleValue";
import { CheckoutOrder } from "../@store/checkout/Checkout.Actions";
import CustomButton from "./CustomButton";
import CustomTabs from "./CustomTabs";
import CustomStepper from "./CustomStepper";
import "./select.css";
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
      width: "440px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: "none",
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px",
      overflowY: "scroll",
      maxHeight: "100%",
    },
    detail: {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
      justifyContent: "space-between",
      paddingBottom: "5px",
      margin: "10px 15px",
      alignItems: "center",
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
      zIndex: 1,
    },
    btn: {
      background: "linear-gradient(45deg,rgb(61, 54, 54), red)",
      border: 0,
      borderRadius: 999,
      color: "white",
      height: 35,
      margin: "3px",
      display: "flex",
      padding: "0 10px",
      cursor: "pointer",
      marginTop: "30px",
      marginLeft: "20px",
      "&:hover": {
        background: "linear-gradient(45deg,red,rgb(61, 54, 54),)",
      },
      image: {
        height: "100px",
        backgroundColor: "red",
        width: "100%",
      },
      typoCart: {
        fontWeight: "800",
        fontSize: "20px",
      },
      ordertip: {
        backgroundColor: "rgb(250, 250, 250)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgb(204, 204, 204)",
      },
      items: {
        fontWeight: "600",
        flexGrow: "1",
        marginLeft: "10px",
      },
      quantity: {
        display: "flex",
        padding: "3px 20px",
        borderBottom: "1px dashed lightgray",
        alignItems: "center",
      },
      name: {
        display: "flex",
        flexDirection: "column",
        lineHeight: "1.8",
        flexGrow: "1",
        marginLeft: "20px",
      },
      test: {
        width: "100%",
        borderRadius: "2px",
        height: "38px",
        padding: "6px 6px",
        borderLeft: "none",
        borderRight: "none",
        borderColor: "lightgray",
        background: "red",
        "&:focus": {
          outline: "none",
        },
      },
    },
  })
);

function Confirmation({ open, name, email, phoneno, status }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const cart_items = useSelector(({ cartreducer }) => cartreducer.cart);
  const [total, setTotal] = useState(0);
  const handleClose = () => {
    open(false);
  };
  const useEffect =
    (() => {
      setTotal(cart_items.reduce((sum, i) => (sum += i.qty * i.price), 0));
    },
    []);
  const handleCheckout = (e) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const options = [
    "Change Status",
    "Cancelled",
    "Un-Confirmed",
    "Confirmed",
    "Ready",
    "On Route",
  ];
  const options0 = [
    "Modify Est. Driver Pickup Time",
    "Add 5 minutes",
    "Add 10 minutes",
    "Add 15 minutes",
    "Add 20 minutes",
    "Add 25 minutes",
    "Add 30 minutes",
    "Add 35 minutes",
    "Add 40 minutes",
    "Add 45 minutes",
    "Add 50 minutes",
    "Add 55 minutes",
    "Add 65 minutes",
    "Add 70 minutes",
    "Add 75 minutes",
    "Add 80 minutes",
    "Add 85 minutes",
    "Add 90 minutes",
  ];
  const options1 = ["Actions", "Delete Orders"];
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Close
        onClick={handleClose}
        fontSize="Large"
        style={{
          cursor: "pointer",
          borderRadius: "20px",
          color: "black",
          backgroundColor: "white",
          padding: "5px",
          position: "absolute",
          top: "-3px",
          right: "-1px",
        }}
      />
      <div className={classes.detail}>
        <Typography
          variant="h6"
          style={{
            fontWeight: "900",
            fontSize: "20px",
            padding: "7px 10px",
            borderRadius: "20px",
            backgroundColor: "rgb(238, 82, 82)",
            color: "white",
          }}
        >
          #102
        </Typography>
        <div>
          <Typography
            style={{ fontSize: "12px", position: "relative", right: "22px" }}
          >
            Ready Time-15/02/2021
          </Typography>
          <Typography style={{ fontSize: "12px" }}>
            Real-time updates
          </Typography>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "red",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <CustomStepper item1="Un-Confirmed" item2="Confirmed" item3="Ready" />
      </div>
      <select className={"select_test"}>
        {options.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <select className={"select_test"}>
        {options0.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <select className={"select_test"}>
        {options1.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
      <CustomTabs item1="Details" item2="Dishes" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TitleValue title="Place" value="09/02/2021, 3:28 pm" />
        <TitleValue title="Due" value="15/02/2021, 11:00 am" />
        <TitleValue
          title="Total"
          value={cart_items.reduce((sum, i) => (sum += i.qty * i.price), 0)}
        />
        <TitleValue title="Type" value="Dine-in" />
        <TitleValue
          title="Payment Method"
          value={status == 0 ? "Cash" : "Card"}
        />
        <TitleValue title="Name" value={name} />
        <TitleValue title="Email" value={email} />
        <TitleValue title="Phone" value={phoneno} />
        <TitleValue title="Location" value="Rawalpindi Arts Council" />
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default Confirmation;
