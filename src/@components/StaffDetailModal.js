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
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import TitleValue from "./TitleValue";
import CustomDropDown from "./CustomDropDown";
import { deleteStaff , staffchange } from "../@store/auth/Staff.Actions";

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
      maxWidth: "450px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
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
      top: "-15px",
      right: "-15px",
      fontSize: "xx-large",
    },
    detail: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      PaddingBottom: "15px",
      marginTop: "10px",
    },
    subdetail: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);
function StaffDetailModal({ open, staff }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClose = () => {
    open(false);
  };
  const handleDropDown = (e) => {
    if (e == "Delete") {
      const data = { _id: staff._id };
      dispatch(deleteStaff(data, history));
    }
    else if(e=="Password")
    {
      var password = prompt('Please password you want to change and passowrd should be 6 character log:')
      const data = { _id: staff._id , password:password , email:staff.email };
      dispatch(staffchange(data, history));
    }
    else if(e=="Email")
    {
      var email = prompt('Please Enter a email address:')
      const data = { _id: staff._id , email:email  };
      dispatch(staffchange(data, history));
    }
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Close onClick={handleClose} className={classes.cancelIcon} />
      <div className={classes.detail}>
        <Avatar
          alt="Puneet"
          style={{ marginBottom: "5px", marginRight: "5px" }}
        >
          P
        </Avatar>
        Sehrish
      </div>
      <select
        style={{
          padding: "10px 15px",
          outline: "0px",
          marginTop: "15px",
          borderColor: "rgb(214, 214, 214)",
        }}
        id="myAction"
        onChange={(e) => handleDropDown(e.target.value)}
      >
        <option>Actions</option>
        {staff.verified != false ? (
          <>
            <option value="Password">Edit Password</option>
            <option value="Email">Edit Email Address</option>
            <option value="Delete">Delete Customer</option>
          </>
        ) : (
          <>
            <option value="Delete">Delete Customer</option>
          </>
        )}
      </select>
      <TitleValue title="Type" value={staff.type} />
      <TitleValue title="Name" value={staff.firstName} />
      <TitleValue title="Phone No" value="959280599" />
      <TitleValue title="Email" value={staff.email} />
      <TitleValue title="E-Mail Verified" value={staff.verified} />
      <TitleValue title="Created" value={staff.createdAt} />
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
