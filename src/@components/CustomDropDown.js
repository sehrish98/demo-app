import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    dropdown__style: {
      border: "0",
      backgroundColor: "#ececec",
      marginLeft: "5px",
    },
  })
);
const CustomDropDown = ({ title, options, handleChange }) => {
    const classes = useStyles();
  return (
    <div className="form-group ">
      <label>{title}</label>
      <select className="form-control" onChange={handleChange} className={classes.dropdown__style}>
        {options &&
          options.length > 0 &&
          options.map((option) => <option>{option}</option>)}
      </select>
    </div>
  );
};

export default CustomDropDown;
