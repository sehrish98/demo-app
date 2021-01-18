import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCartstart } from "../@store/Cart/Cart.Actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      backgroundColor: "white",
      color: "black",
      height: 30,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      padding: "15px 20px",
      cursor: "pointer",
      outline: "0",
      fontSize: "14px",
      border: "1px solid rgb(224, 224, 224)",
      "&:hover": {
        background: "lightgray",
      },
    },
    paper: {
      width: "45%",
      display: "flex",
      justifyContent: "space-between",
      padding: "13px",
      alignItems: "center",
      margin: "10px",
    },
    active: {
      background: "rgb(238, 82, 82)",
      color: "white",
      border: "1px solid rgb(238, 82, 82)",
      height: 30,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      fontSize: "14px",
      padding: "15px 20px",
      cursor: "pointer",
      outline: "0",
    },
  })
);
function CustomButton({
  name,
  activ,
  state,
  array,
  id,
  title,
  type,
  price,
  qty,
  open
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (state) 
    {
      state(array);
    } 
    else if (open && name == "Add to Card") {
      const obj = {
        id: id,
        name: title,
        type: type,
        price: price,
        qty: qty,
      };
      dispatch(AddtoCartstart(obj));
      open(false);
    } else {
    }
  };
  const classes = useStyles();
  return (
    <div>
      <button
        className={`${activ ? classes.active : classes.btn}`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}

export default CustomButton;
