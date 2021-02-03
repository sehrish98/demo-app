import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography, Switch } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import OrderTime from "./OrderTime";
import CustomSwitch from "./customSwitch";
import BtnCustom from "./BtnCustom";
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
      margin: "450px auto 150px auto ",
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
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      marginTop: "10px",
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
    subdetail: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    }
  })
);
function SettingModal({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const handleClose = () => {
    open(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}
      >
        <Typography
          variant="h5"
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          Quick Service Settings
        </Typography>
        <CloseIcon className={classes.cancelIcon}
          onClick={handleClose}
        />
      </div>
      <div className={classes.subdetail}>
        <Button style={{ backgroundColor: "lightgray" }}>Pick up</Button>
        <Button variant="p">Delivery</Button>
        <Button variant="p">Dine in</Button>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            Enable
          </Typography>
          <Switch />
        </div>
        <Typography variant="p" style={{ fontSize: "14px" }}>
          Allow customers to place orders that can be collected at your store
          location
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontSize: "16px",
            fontWeight: "700",
            backgroundColor: "lightgray",
            padding: "10px 10px 10px 10px",
            margin: "20px 0px",
          }}
        >
          Wait Times & Auto Status
        </Typography>
        <Typography varient="p" style={{ fontSize: "14px" }}>
          The following settings are used to automatically update order statuses
          and calculate order wait times. The customer wait time is calculated
          by adding the time till confirm & ready values together
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontSize: "14px",
            display: "block",
            fontWeight: "700",
            width: "fit-content",
            padding: "10px 10px 10px 10px",
            backgroundColor: "lightgray",
            margin: "20px 0px",
            borderBottom: "1px dashed rgb(214, 214, 214)",
          }}
        >
          Estimated Wait Time: Unknown
        </Typography>
        <div
          style={{
            borderTop: "1px dashed rgb(214, 214, 214)",
            borderBottom: "1px dashed rgb(214, 214, 214)",
            padding: "20px 0px 20px 0px",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Enable Automated Order Statuses
          </Typography>
          <CustomSwitch title="confirm" />
          <CustomSwitch title="Ready" />
          <CustomSwitch title="Complete" />
          <div style={{ display: "flex", flexDirection: "column" }}></div>
          <Typography
            variant="h6"
            style={{
              fontSize: "14px",
            }}
          >
            Automatically change order statuses based on timings set below. Only
            works for orders due immediately
          </Typography>
        </div>
      </div>
      <OrderTime
        button
        btnname="optional"
        title="Time Till Confirm (minutes)"
        des="Time in minutes from un-confirmed to confirmed. Set 0 for instant confirmation"
      />
      <OrderTime
        button
        btnname="optional"
        title="Time Till Ready (minutes)"
        des="Time in minutes from confirmed to ready. Set 0 for instant change, leaving empty will have no effect"
      />
      <OrderTime
        button
        btnname="optional"
        title="Time Till Complete (minutes)"
        des="Time in minutes from the previous status to complete. Set 0 for instant change, leaving empty will have no effect"
      />
      <OrderTime
        title="For Every X Outstanding Orders"
        des="The number of outstanding orders before an increase in wait time is applied"
      />
      <OrderTime
        title="Increase Wait Time By Y Minutes"
        des="The amount of time to add onto the customers wait time if the order count above is exceeded"
      />
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

export default SettingModal;
