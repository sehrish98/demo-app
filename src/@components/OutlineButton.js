import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      justifyContent: "center",
      background: "transparent",
      color: "rgb(128, 128, 128)",
      height: 30,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      padding: "20px 20px",
      cursor: "pointer",
      margin: "10px",
      outline: "0",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid rgb(224, 224, 224)",
      "&:hover": {
        background: "white",
        color: "black",
      },
    },
    paper: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "13px",
      alignItems: "center",
      margin: "10px",
    },
    active: {
      background: "white",
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
function OutlineButton({ name, open, width, show ,title}) {
  const handleClick = () => {
    open(true);
    if (show) {
      show(!show);
    }
    else if(title="save")
    {
      open(false)
    }
    else{
      
    }
  };
  const classes = useStyles();
  return (
    <div style={{ width: width }}>
      <button
        className={classes.btn}
        onClick={handleClick}
        style={{ width: "100%" }}
      >
        {name}
      </button>
    </div>
  );
}

export default OutlineButton;
