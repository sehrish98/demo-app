import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      height: "40px",
      width: "100%",
      margin: "10px 1px 10px 1px",
      outline: "0",
    },
  })
);
function CustomInput({ type, placeholder, handlechange, name ,value , req}) {
  const classes = useStyles();
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={classes.input}
        onChange={(e)=>{handlechange(e)}}
        name={name}
        value={value}
        required={false}
        autoComplete="off"
      />
    </div>
  );
}

export default CustomInput;
