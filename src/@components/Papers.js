import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "45%",
      display: "flex",
      justifyContent: "space-between",
      padding: "13px",
      alignItems: "center",
      margin: "10px",
    },
  })
);
function Papers({ title, value }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography variant="p" style={{ fontWeight: "700" }}>
        {title}
      </Typography>
      <Typography variant="p">{value}</Typography>
    </Paper>
  );
}

export default Papers;
