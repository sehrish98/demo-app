import React, { useState } from "react";
import { Typography, Switch } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: "13px",
      borderBottom: "1px dashed rgb(214, 214, 214)",
    },
    btn: {
      backgroundColor: "white",
      padding: "5px 10px 5px 10px",
      outline: "0",
      border: "1px solid gray",
      color: "gray",
      borderRadius: "3px",
    },
  })
);
function OrderTime({
  title,
  btnname,
  button,
  des,
  value,
  checked,
  dropdown,
  btn,
  handlechange,
  inputname,
}) {
  const [name, setName] = useState("");
  const classes = useStyles();
  return (
    <div elevation={3} className={classes.paper}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography variant="p" style={{ fontWeight: "600" }}>
          {title}
        </Typography>
        {button && <button className={classes.btn}>{btnname}</button>}
      </div>
      <div style={{ margin: "8px 0px" }}>
        {checked ? (
          <Switch />
        ) : btn ? (
          <CustomButton name={value} activ />
        ) : (
          <CustomInput
            type="text"
            value={value}
            handlechange={handlechange}
            name={inputname}
          />
        )}
      </div>
      <div>
        <Typography
          variant="p"
          style={{
            fontSize: "14px",
            color: "rgb(33, 33, 33)",
            paddingTop: "5px",
          }}
        >
          {des}
        </Typography>
      </div>
    </div>
  );
}

export default OrderTime;
