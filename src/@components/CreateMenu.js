import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import OrderTime from "./OrderTime";

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
      width: "100%",
      maxWidth: "720px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      display: "flex",
      flexDirection: "column",
      margin: "50px auto 150px auto ",
      zIndex: "9999",
    },
    btn: {
      width: "100%",
      backgroundColor: "rgb(238, 82, 82)",
      border: 0,
      color: "white",
      height: 35,
      margin: "3px",
      display: "flex",
      padding: "5px 10px",
      cursor: "pointer",
      marginTop: "30px",
      "&:hover": {
        background: "linear-gradient(45deg,red,rgb(61, 54, 54),)",
      },
    },
  })
);
function CreateMenu({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const [initial, setInitial] = useState("general");
  const classes = useStyles();
  const handleClose = () => {
    open(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <Typography
          variant="h5"
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          Quick Service Settings
        </Typography>
        <CloseIcon
          onClick={handleClose}
          style={{
            cursor: "pointer",
            borderRadius: "20px",
            color: "white",
            backgroundColor: "black",
            padding: "5px",
          }}
        />
      </div>
      <div
        style={{
          margin: "10px 0px",
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
          padding: "10px 0px",
        }}
      >
        <Button
          style={{ backgroundColor: "lightgray" }}
          onClick={() => setInitial("general")}
        >
          General
        </Button>
        <Button variant="p" onClick={() => setInitial("credential")}>
          Condition
        </Button>
      </div>
      {initial === "general" && (
        <>
          <OrderTime title="Name" des="A unique name for your menu" />
          <OrderTime
            button
            btnname="optional"
            title="Display Name"
            des="Will override the unique name in your store"
          />
          <OrderTime
            button
            btnname="optional"
            title="Description"
            des="The number of outstanding orders before an increase in wait time is applied"
          />
        </>
      )}
      {initial == "credential" && (
        <>
          <OrderTime title="Name" des="A unique name for your menu" />
          <OrderTime
            button
            btnname="optional"
            title="Display Name"
            des="Will override the unique name in your store"
          />
          <OrderTime
            button
            btnname="optional"
            title="Description"
            des="The number of outstanding orders before an increase in wait time is applied"
          />
        </>
      )}
      <Button className={classes.btn} onClick={handleClose}>
        Save
      </Button>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ overflowY: "auto" }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default CreateMenu;
