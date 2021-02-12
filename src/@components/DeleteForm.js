import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { MenuItemsCreate } from "../@store/menu/Menu.Actions";
import CustomButton from "./CustomButton";

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
      height: "140px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      display: "flex",
      flexDirection: "column",
    },
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
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
    },
    allbtn: {
      display: "flex",
      flexFlow: "row-reverse",
      marginTop: "20px",
    },
    cstmbtn:{
      margin:"10px"
    }
  })
);
function DeleteForm({ open, title, id, handledelete }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const handleClose = () => {
    open(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="p" style={{ fontWeight: "500" }}>
          {`Delete ${title}`}
        </Typography>
        <Typography variant="p">New Menu</Typography>
      </div>
      <div className={classes.allbtn}>
        <CustomButton
          name="Delete"
          activ
          className={classes.cstmbtn}
          title={title}
          id={id}
          handlechange={handledelete}
        />
        <CustomButton name="Cancel" className={classes.cstmbtn} handlechange={handleClose}/>
      </div>
    </div>
  );
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}

export default DeleteForm;
