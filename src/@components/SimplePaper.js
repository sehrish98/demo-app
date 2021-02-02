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
      borderBottom: "1px solid lightgray"
    },
    paper: {
      alignSelf: "center",
      width: "92%",
      height: "80px",
      margin: "10px 0px 10px 0px",
    },
    typo:{
      fontWeight: "500"
    }
  })
);
function Papers({ title, value }) {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.paper}>
      <div
        className={classes.detail}
      >
        <Typography variant="p">
          {title}
        </Typography>
        <Typography variant="p">{value}</Typography>
      </div>
    </Paper>
  );
}

export default Papers;
