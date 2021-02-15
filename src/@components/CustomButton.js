import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

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
  handlechange,
  activ,
  type
}) {
  const classes = useStyles();
  return (
    <div>
      <button
      type={type}
        className={`${activ ? classes.active : classes.btn}`}
        onClick={handlechange}
      >
        {name}
      </button>
    </div>
  );
}

export default CustomButton;