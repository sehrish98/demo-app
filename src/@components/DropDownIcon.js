import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function DropDownIcon() {
  return (
    <p
      style={{
        border: "1px solid rgb(238, 82, 82)",
        color: "rgb(238, 82, 82)",
        cursor: "pointer",
        borderRadius: "5px",
        whiteSpace: "pre",
      }}
    >
      <ArrowDropDownIcon fontSize="large" />
    </p>
  );
}

export default DropDownIcon;
