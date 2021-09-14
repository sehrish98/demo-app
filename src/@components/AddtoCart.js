import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import CustomButton from "./CustomButton";
import {
  RemoveQuantyCart,
} from "../@store/Cart/Cart.Actions";

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
      width: "420px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: "none",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        width: "355px",
      },
    },
    detail: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
      justifyContent: "space-between",
      paddingBottom: "5px",
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
    },
  })
);

const list = [
  {
    image:
      "https://ucarecdn.com/87612477-521b-4854-9068-d56adca0576c/-/resize/x400/-/format/auto/-/progressive/yes/garlic-bread-600-400.jpeg",
    name: "Garlic Bread",
    type: "sides",
    price: "50.26",
  },
  {
    image:
      "https://ucarecdn.com/dc42d806-534b-4e51-a2c6-870440391524/-/resize/x400/-/format/auto/-/progressive/yes/fries-600-400.jpeg",
    name: "Fries",
    type: "sides",
    price: "70.56",
  },
];

function AddtoCart({ name, des, type, image, price, open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [opencheck, setOpenCheck] = useState(false);
  const cart_items = useSelector(({ cartreducer }) => cartreducer.cart);
  const handleClose = () => {
    open(false);
  };
  const handleremoveCart = (e) => {
    const obj = {
      id: e.id,
      title: e.name,
      type: e.type,
      price: e.price,
      quantity: "1",
    };
    dispatch(RemoveQuantyCart(obj));
  };
  const handleCheckout = () => {
    handleClose();
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
      {/* <img style={{ height: "280px" }} src={image} /> */}
      <div style={{ padding: "10px 20px" }}>
        <div className={classes.detail}>
          <Typography
            variant="h6"
            style={{
              fontWeight: "800",
              fontSize: "20px",
            }}
          >
            Cart
          </Typography>
        </div>
      </div>
      {!cart_items.length > 0 ? (
        <Typography
          variant="p"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "15px 5px",
          }}
        >
          Empty Cart ! Keep Shopping
        </Typography>
      ) : (
        <>
          <div style={{ display: "flex", padding: "0px 15px" }}>
            <Typography
              variant="p"
              style={{
                fontWeight: "600",
              }}
            >
              Qty
            </Typography>
            <Typography
              variant="p"
              style={{
                fontWeight: "600",
                flexGrow: "1",
                marginLeft: "10px",
              }}
            >
              Items
            </Typography>
            <Typography
              variant="p"
              style={{
                fontWeight: "600",
              }}
            >
              Price
            </Typography>
          </div>

          {cart_items.map((c) => (
            <div
              style={{
                display: "flex",
                padding: "3px 20px",
                borderBottom: "1px dashed lightgray",
                alignItems: "center",
              }}
            >
              <Typography variant="p">{c.qty}</Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: "1.8",
                  flexGrow: "1",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="p">{c.name}</Typography>
                <div style={{ display: "flex", color: "rgb(238, 82, 82)" }}>
                  <Typography style={{ cursor: "pointer" }}>Edit</Typography>
                  <Typography
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                    onClick={() => handleremoveCart(c)}
                  >
                    Remove
                  </Typography>
                </div>
              </div>

              <Typography variant="p">PKR {c.price}</Typography>
            </div>
          ))}

          <div className={classes.detail} style={{ padding: "8px 20px" }}>
            <Typography variant="p">Cart</Typography>
            <Typography variant="p">
              PKR {cart_items.reduce((sum, i) => (sum += i.qty * i.price), 0)}
            </Typography>
          </div>
          <div className={classes.detail} style={{ padding: "8px 20px" }}>
            <Typography
              variant="h6"
              style={{ fontWeight: "800", fontSize: "18px" }}
            >
              Total
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "800", fontSize: "18px" }}
            >
              {cart_items.reduce((sum, i) => (sum += i.qty * i.price), 0)}
            </Typography>
          </div>

          <div
            style={{
              backgroundColor: "rgb(250, 250, 250)",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid rgb(204, 204, 204)",
            }}
          >
            Order Tip
          </div>

          <div
            style={{
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              //   border: "1px solid rgb(204, 204, 204)",
              //   margin: "5px 0px",
            }}
          >
            <Typography variant="p">Rs</Typography>
            <input
              style={{
                outline: "0",
                border: "0",
                background: "transparent",
                flexGrow: "1",
                marginLeft: "5px",
              }}
              type="text"
              placeholder="Another Order tip"
            ></input>
          </div>

          <div
            style={{
              backgroundColor: "rgb(250, 250, 250)",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              border: "1px solid rgb(204, 204, 204)",
            }}
          >
            Promo Code
          </div>

          <div
            style={{
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid rgb(204, 204, 204)",
              //   margin: "5px 0px",
            }}
          >
            <input
              style={{
                outline: "0",
                border: "0",
                background: "transparent",
                flexGrow: "1",
                marginLeft: "5px",
              }}
              type="text"
              placeholder="Add promo code"
            ></input>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 20px 10px 20px",
              width: "100%",
            }}
          >
            <CustomButton
              name="Proceed to Checkout"
              style={{ marginLeft: "10px" }}
              activ
              handlechange={handleCheckout}
            />
          </div>
        </>
      )}
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

export default AddtoCart;
