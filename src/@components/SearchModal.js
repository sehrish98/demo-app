import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

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
      width: "1250px",
      height: "220px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "10px",
    },
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      borderBottom: "1px solid lightgray",
      padding: "10px 20px 10px 20px",
    },
  })
);
function SearchModal({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const handleClose = () => {
    open(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseIcon
        fontSize="Large"
        onClick={handleClose}
        className={classes.cancelIcon}
      />
      <div className={classes.subdetail}>
        <Typography
          variant="h6"
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          Search Dishes
        </Typography>
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <CustomInput type="text" />
      </div>
      <Typography variant="p" style={{ marginTop: "20px" }}>
        No items matched your search query. Please try other keywords.
      </Typography>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SearchModal;
