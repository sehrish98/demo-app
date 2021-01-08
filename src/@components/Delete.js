import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography } from "@material-ui/core";

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
  })
);
function Delete({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const handleClose = () => {
    open(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{ borderBottom: "1px solid lightgray" }}
        className={classes.detail}
      >
        <Typography variant="p" style={{ fontWeight: "500" }}>
          Delete
        </Typography>
        <Typography variant="p">New Menu</Typography>
      </div>
      <div
        style={{ display: "flex", flexFlow: "row-reverse", marginTop: "20px" }}
      >
        <CustomButton name="Delete" activ style={{ marginRight: "10px" }} />
        <CustomButton name="Cancel" style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
  return (
    <div>
      {/* <Slide in={open}> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {/* </Slide> */}
    </div>
  );
}

export default Delete;
