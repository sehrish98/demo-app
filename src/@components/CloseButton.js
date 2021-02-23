import React from "react";
import { Close } from "@material-ui/icons";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    style: {
      cursor: "pointer",
      borderRadius: "20px",
      color: "white",
      backgroundColor: "black",
      padding: "5px",
      position: "absolute",
      top: "-10",
      left: "-10",
    },
  })
);
function CloseButton({ open }) {
  const handleClose = () => {
    open(false);
  };
  const classes = useStyles();
  return (
    <Close fontSize="Large" onClick={handleClose} className={classes.style} />
  );
}

export default CloseButton;
