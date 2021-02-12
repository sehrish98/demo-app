import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography, TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import TitleValue from "./TitleValue";
import { CheckoutOrder } from "../@store/checkout/Checkout.Actions";
import CustomButton from "./CustomButton";
import Confirmation from "./Confirmation"
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    overflow: "scroll",
    height: "100%",
    // display:'block'
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
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
      justifyContent: "space-between",
      paddingBottom: "5px",
      flexDirection: "column",
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
      input_style: {
        margin: "5px 10px",
        padding: "5px",
        outline: "0",
        border: "1px solid rgb(214, 214, 214)",
        fontSize: "12px",
        borderRadius: "3px",
      },
    },
  })
);

function Checkout({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const cart_items = useSelector(({ cartreducer }) => cartreducer.cart);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState(0);
  const [total,setTotal]=useState(0)
  const [openConfirm , setOpenConfirm]=useState(false)
  const handleClose = () => {
    open(false);
  };
  const useEffect=(()=>{
    setTotal(cart_items.reduce((sum, i) => (sum += i.qty * i.price), 0))
  },[])
  const handleCheckout = (e) => {
    e.preventDefault()
    const data = {
      fullName: name,
      email: email,
      phoneNumber: phoneno,
      price:total,
      payByCard: status,
      Notes: notes,
      Items:cart_items,
      type:0
    };
    if(name!=""&&email!=""&&phoneno!="")
    {
      dispatch(CheckoutOrder(data));
      setOpenConfirm(true)
    }
    else{
      console.log("hi i m else")
    }
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Close
        onClick={handleClose}
        fontSize="Large"
        style={{
          cursor: "pointer",
          borderRadius: "20px",
          color: "white",
          backgroundColor: "black",
          padding: "5px",
          position: "absolute",
          top: "-10",
          right: "-10",
        }}
      />
      <div className={classes.detail}>
        <Typography
          variant="h6"
          style={{
            fontWeight: "900",
            fontSize: "20px",
          }}
        >
          Checkout
        </Typography>
        <Typography style={{ fontSize: "14px" }}>
          Confirm your order details
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TitleValue title="Service" value="Dine-In" />
        <TitleValue title="Table" value="Email" />
        <TitleValue title="Due" value="Now / ASAP" />
        <TitleValue
          title="Total"
          value={cart_items.reduce((sum, i) => (sum += i.qty * i.price), 0)}
        />
        <TitleValue title="Location" value="Rawalpindi Arts Council" />
      </div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgb(247, 247, 247)",
          border: "1px solid rgb(214, 214, 214)",
          margin: "5px 0px",
        }}
      >
        <div>
          <Typography
            style={{
              fontWeight: "700",
            }}
          >
            Customer
          </Typography>
          <Typography>Login to save your order & details</Typography>
        </div>
        <CustomButton name="Login" activ handlechange={handleLogin} />
      </div>
      <form>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "5px" }}
        >
          <input
            type="text"
            style={{
              margin: "5px 10px",
              padding: "5px",
              outline: "0",
              border: "1px solid rgb(214, 214, 214)",
              fontSize: "14px",
              borderRadius: "3px",
            }}
            required
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            style={{
              margin: "5px 10px",
              padding: "5px",
              outline: "0",
              border: "1px solid rgb(214, 214, 214)",
              fontSize: "14px",
              borderRadius: "3px",
            }}
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            style={{
              margin: "5px 10px",
              padding: "5px",
              outline: "0",
              border: "1px solid rgb(214, 214, 214)",
              fontSize: "14px",
              borderRadius: "3px",
            }}
            required
            placeholder="Phone no"
            onChange={(e) => setPhoneno(e.target.value)}
          />
          <input
            type="text"
            style={{
              margin: "5px 10px",
              padding: "5px",
              outline: "0",
              border: "1px solid rgb(214, 214, 214)",
              fontSize: "14px",
              borderRadius: "3px",
            }}
            required
            placeholder="Order Notes"
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <Typography
            style={{
              padding: "20px",
              fontWeight: "700",
              backgroundColor: "rgb(247, 247, 247)",
              border: "1px solid rgb(214, 214, 214)",
            }}
          >
            Payment Method
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "5px 20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px",
                width: "100%",
                border: "1px solid lightgray",
                margin: "5px",
                borderRadius: "3px",
              }}
            >
              <input
                type="radio"
                name="payment"
                onChange={() => setStatus(0)}
                checked
              />
              <Typography>Cash</Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 10px",
                width: "100%",
                border: "1px solid lightgray",
                margin: "5px",
                borderRadius: "3px",
              }}
            >
              <input
                type="radio"
                name="payment"
                onChange={() => setStatus(1)}
              />
              <Typography variant="p">Card</Typography>
            </div>
          </div>
        </div>
        <center>
          <CustomButton
            name="Place Order"
            activ
            type="submit"
            handlechange={handleCheckout}
          />
        </center>
      </form>
      {openConfirm&&<Confirmation open={setOpenConfirm} name={name} email={email} status={status} phoneno={phoneno} />}
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

export default Checkout;
