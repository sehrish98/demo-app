import React from "react";
import { Switch } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    input__style: {
      display: "flex",
      alignItems: "center",
    },
  })
);
function CustomSwitch({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.input__style}>
      <Switch />
      <label>{title}</label>
    </div>
  );
}

export default CustomSwitch;
