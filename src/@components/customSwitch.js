import React from "react";
import { Switch } from "@material-ui/core";

function CustomSwitch({ title }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch />
      <label>{title}</label>
    </div>
  );
}

export default CustomSwitch;
