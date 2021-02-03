import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Modal,
  Typography,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { ExpandMore, Close } from "@material-ui/icons";

import TitleValue from "./TitleValue";

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
      maxWidth: "550px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      display: "flex",
      flexDirection: "column",
      margin: "50px auto 50px auto ",
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
      padding: "5px 5px",
      cursor: "pointer",
      marginTop: "30px",
      "&:hover": {
        background: "linear-gradient(45deg,red,rgb(61, 54, 54),)",
      },
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
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      PaddingBottom: "15px",
      marginTop: "10px",
      borderBottom: "1px solid lightgray",
    },
    subdetail: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);
function StaffDetailModal({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const handleClose = () => {
    open(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Avatar alt="Puneet" style={{ marginBottom: "5px" }}>
          P
        </Avatar>
        <Close onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <TitleValue title="Type" value="Email" />
      <TitleValue title="Name" value="Puneet" />
      <TitleValue title="Phone No" value="959280599" />
      <TitleValue title="Email" value="puneet13@gmail.com" />
      <TitleValue title="E-Mail Verified" value="yes" />
      <TitleValue title="Created" value="25/11/2020, 1:43 pm" />
      <TitleValue title="Last Seen" value="25/11/2020, 1:43 pm" />
      <TitleValue title="Last Order" value="25/11/2020, 1:43 pm" />
      <TitleValue title="Last Ip" value="25/11/2020, 1:43 pm" />
      <TitleValue title="Delivery Address" value="25/11/2020, 1:43 pm" />
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{ backgroundColor: "lightgray" }}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.subdetail}>
            <TitleValue title="Sessions" value="2" />
            <TitleValue title="Total Orders" value="25" />
            <TitleValue title="Total Sales" value="2" />
          </div>
        </AccordionDetails>
      </Accordion>
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

export default StaffDetailModal;
