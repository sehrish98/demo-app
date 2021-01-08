import React from "react";
import {  Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      height: "100px",
      minWidth: "280px",
      maxWidth: "420px",
      display: "flex",
      flexDirection: "column",
      margin: "10px 5px 10px 5px",
    },
    item: {
      width: "100%",
      display: "flex",
      padding: "5px",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
      white: "white",
      borderRadius: "3px",
    },
  })
);
function OrderReview({ title, content, bg }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <div
        className={classes.item}
        style={{ backgroundColor: bg, color: "white" }}
      >
        <HelpIcon fontSize="small" />
        <Typography
          style={{
            fontWeight: "600",
            display: "flex",
            fontSize: "12px",
            flexGrow: "1",
            justifyContent: "center",
            placeItems: "center",
            alignSelf: "center",
          }}
        >
          {title}
        </Typography>
        <HelpIcon fontSize="small" />
      </div>
      <div>
        <Typography
          variant="p"
          style={{
            fontSize: "14px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "40px",
          }}
        >
          {content}
        </Typography>
      </div>
    </Paper>
  );
}
export default OrderReview;
