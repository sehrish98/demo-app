import React from "react";
import {Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
    },
    paper: {
      alignSelf: "center",
      width: "92%",
      height: "80px",
      margin: "10px 0px 10px 0px",
    },
  })
);
function Papers({ title, value }) {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <div
        style={{ borderBottom: "1px solid lightgray" }}
        className={classes.detail}
      >
        <Typography variant="p" style={{ fontWeight: "500" }}>
          {title}
        </Typography>
        <Typography variant="p">{value}</Typography>
      </div>
    </Paper>
  );
}

export default Papers;
