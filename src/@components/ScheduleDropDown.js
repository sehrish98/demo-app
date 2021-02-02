import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, ChevronRight } from "@material-ui/icons";
import { ClickAwayListener } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      backgroundColor: "white",
      color: "black",
      height: 25,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      padding: "0 10px",
      cursor: "pointer",
      border: "1px solid lightgray",
      outline: "0px",
      "&:hover": {
        background: "lightgray",
      },
    },
    paper: {
      right: "20px",
      minWidth: "400px",
      display: "flex",
      flexDirection: "column",
      padding: "13px",
      alignItems: "center",
      margin: "5px",
      position: "absolute",
      zIndex: "12",
    },
    active: {
      background: "rgb(238, 82, 82)",
      color: "white",
      border: 0,
      height: 25,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      padding: "0 20px",
      cursor: "pointer",
      outline: "0",
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
  })
);
function ScheduleDropDown({ open }) {
  const classes = useStyles();
  const HandleDropDownClick = () => {
    open(!open);
  };
  return (
    <ClickAwayListener onClickAway={HandleDropDownClick}>
      <Paper className={classes.paper}>
        <div className={classes.detail}>
          <Typography>Date Range</Typography>
          <Typography>Change Date</Typography>
        </div>
        <div className={classes.detail}>
          <div style={{ display: "flex" }}>
            <button className={classes.active}>Day</button>
            <button className={classes.btn}>Week</button>
            <button className={classes.btn}>Month</button>
            <button className={classes.btn}>Year</button>
          </div>
          <div style={{ display: "flex" }}>
            <button className={classes.btn}>
              <KeyboardArrowLeft />
            </button>
            <button className={classes.btn}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </Paper>
    </ClickAwayListener>
  );
}

export default ScheduleDropDown;
