import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography, ButtonGroup, Button } from "@material-ui/core";
import { FileCopy, Close } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomButton from "./CustomButton";
import { AddtoCartstart, RemoveCart } from "../@store/Cart/Cart.Actions";

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
      width: "450px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: "none",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down('sm')]: {
        width: "355px",
      },
    },
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      alignItems: "center",
      fontWeight: "900",
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
      cancelIcon: {
        cursor: "pointer",
        borderRadius: "20px",
        color: "white",
        backgroundColor: "black",
        padding: "5px",
        position: "absolute",
        top: "-10",
        right: "-10",
      },
    },
  })
);
function ServiceModal({ id, name, qty, des, type, image, price, open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const [cart, setCart] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const cart_items = useSelector(({ cartreducer }) => cartreducer.cart);
  const handleCart = (e) => {
    setCart(cart + 1)
  };
  const handleremoveCart = (e) => {
    if (cart != 1) {
      setCart(cart - 1);
    }
    const obj = {
      id: id,
      name: name,
      type: type,
      price: price,
      qty: qty,
    };
    dispatch(RemoveCart(obj, history));
  };
  const handleClose = () => {
    open(false);
  };
  const handlecartchange = (e) => {
    let quantity;
    if(cart>0)
    {
      quantity=cart
    }
    else{
      quantity=qty
    }
    const obj = {
      id: id,
      name: name,
      type: type,
      price: price,
      qty: quantity,
    };
    dispatch(AddtoCartstart(obj, history));
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
      <img style={{ height: "280px" }} src={image} />
      <div style={{ padding: "15px 25px" }}>
        <div className={classes.detail}>
          <Typography
            variant="h6"
            style={{ fontWeight: "800", fontSize: "18px" }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "800", fontSize: "18px" }}
          >
            PKR {price}
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: "1.4",
            }}
          >
            {type}
          </Typography>
          <Typography
            style={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "1.4",
            }}
          >
            {des}
          </Typography>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "rgb(250, 250, 250)",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          border: "1px solid rgb(204, 204, 204)",
          margin: "5px 0px",
        }}
      >
        <FileCopy
          fontSize="small"
          style={{ color: "rgb(127, 127, 127)", marginRight: "5px" }}
        />
        <input
          style={{
            outline: "0",
            border: "0",
            background: "transparent",
            flexGrow: "1",
            backgroundColor: "rgb(250, 250, 250)",
          }}
          type="text"
          placeholder="Special Instruction..."
        ></input>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px 10px 20px",
        }}
      >
        <ButtonGroup aria-label="outlined  button group">
          <Button onClick={() => handleremoveCart(id)}>-</Button>
          <Button>{cart}</Button>
          <Button onClick={() => handleCart(name)}>+</Button>
        </ButtonGroup>
        <CustomButton
          name="Add to Card"
          handlechange={() => {
            handlecartchange(id, qty, type, name, price);
          }}
          style={{ marginLeft: "10px" }}
          id={id}
          qty={qty}
          title={name}
          type={type}
          price={price}
          activ
          open={open}
        />
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

export default ServiceModal;
