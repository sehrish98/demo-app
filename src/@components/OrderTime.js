import React, { useEffect, useState } from "react";
import { Typography, Switch } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Icons from "./icons";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
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
    des: {
      fontSize: "14px",
      color: "rgb(33, 33, 33)",
      paddingTop: "5px",
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
    },
    typo: {
      fontWeight: "600",
    },
    iconStyle: {
      margin: "2px",
      border: "1px solid rgb(214, 214, 214)",
      padding: "10px",
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
  req,
  btngroup,
  colors,
  onClick,
  onButton,
  spanColorChange,
  iconColorChange,
  valueIcon,
  name1,
  name2
}) {
  const [name, setName] = useState("");
  const [buttonIcon, setButton] = useState("");
  const classes = useStyles();
  const [btnColor1, setBtnColor1] = useState(false);
  const [btnColor2, setBtnColor2] = useState(false);
  const [btnColor3, setBtnColor3] = useState(false);
  const [colorValueBackground, setColorValue] = useState("#ff6900");
  const [colorValueText, setColortext] = useState("#8ed1fc");
  
  return (
    <div elevation={3} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="p" className={classes.typo}>
          {title}
        </Typography>
        {button && <button className={classes.btn}>{btnname}</button>}
      </div>
      <div style={{ margin: "8px 0px" }}>
        {checked ? (
          <Switch />
        ) : btn ? (
          <CustomButton name={value} activ />
        ) : btngroup ? (
          <ButtonGroup
            variant="contained"
            color="none"
            aria-label="contained primary button group"
          >
            <Button
              name="text"
              color={btnColor1 ? "secondary" : "none"}
              onClick={() => {
                setButton("text");
                setBtnColor1(true);
                setBtnColor2(false);
                setBtnColor3(false);
                onButton("text");
              }}
            >
              Text
            </Button>
            <Button
              name="icon"
              color={btnColor2 ? "secondary" : "none"}
              onClick={() => {
                setButton("icon");
                setBtnColor1(false);
                setBtnColor2(true);
                setBtnColor3(false);
                onButton("icon");
              }}
            >
              Icon
            </Button>
            <Button
              name="none"
              color={btnColor3 ? "secondary" : "none"}
              onClick={() => {
                setButton("none");
                setBtnColor1(false);
                setBtnColor2(false);
                setBtnColor3(true);
                onButton("none");
              }}
            >
              None
            </Button>
          </ButtonGroup>
        ) : colors ? (
          <>
            {" "}
            <Typography variant="p" className={classes.typo}>
              BackGround
            </Typography>
            <input
            name={name1}
              type="color"
              style={{ margin: "10px" }}
              value={colorValueBackground}
              onChange={(e) => {
                setColorValue(e.target.value);
                spanColorChange(e);
              }}
            />
            <Typography variant="p" className={classes.typo}>
              Text
            </Typography>
            <input
              type="color"
              name={name2}
              style={{ margin: "10px" }}
              value={colorValueText}
              onChange={(e) => {
                setColortext(e.target.value);
                spanColorChange(e)
               }}
            />
          </>
        ) : (
          <CustomInput
            type="text"
            value={value}
            handlechange={handlechange}
            name={inputname}
            req
          />
        )}
      </div>
      <div>
        <Typography variant="p" className={classes.des}>
          {des}
        </Typography>
        {buttonIcon === "text" ? (
          <>
            <br />
            <br />
            <Typography variant="p" className={classes.typo}>
              Icon Text
            </Typography>
            <CustomInput
              type="text"
              value={value}
              handlechange={handlechange}
              name={inputname}
              req
            />
            <Typography variant="p" className={classes.des}>
              The text to be displayed inside the icon on the dish tag
            </Typography>
          </>
        ) : buttonIcon === "icon" ? (
          <>
            <Icons onClick={onClick} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OrderTime;
