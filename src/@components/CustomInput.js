import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      display: "inline-block",
      height: "40px",
      width: "100%",
      margin: "10px 1px 10px 1px",
      outline: "0",
    },
    buttonStyling: {
      display: "inline-block",
    },
  })
);
function CustomInput({
  type,
  placeholder,
  handlechange,
  name,
  values,
  req,
  addbtn,
  changeState,
  minimum,
}) {
  const classes = useStyles();

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={classes.input}
        onChange={handlechange}
        name={name}
        value={values}
        required={false}
        autoComplete="off"
        min={minimum}
      />
      {addbtn && (
        <>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttonStyling}
            onClick={changeState}
          >
            Normal Image
          </Button>
        </>
      )}
    </div>
  );
}

export default CustomInput;
