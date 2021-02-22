import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { DishEdit } from "../@store/dish/Dish.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import RemoveDishes from "./DropDown";
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    maxHeight: "90vh",
    margin: "0 auto",
    overflow: "auto",
  };
}
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "100%",
      maxWidth: "720px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      display: "flex",
      flexDirection: "column",
      margin: "50px auto 150px auto ",
      zIndex: "9999",
    },
    btn: {
      width: "100%",
      backgroundColor: "rgb(238, 82, 82)",
      border: 0,
      color: "white",
      height: 35,
      margin: "3px",
      display: "flex",
      padding: "5px 10px",
      cursor: "pointer",
      marginTop: "30px",
      "&:hover": {
        background: "rgb(238, 82, 82)",
      },
      "&:focus": {
        outline: "none",
      },
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "37px",
      marginTop: "22px",
    },
    cancelIcon: {
      cursor: "pointer",
      borderRadius: "20px",
      color: "white",
      backgroundColor: "black",
      padding: "5px",
      position: "absolute",
      top: "20px",
      right: "30px",
      fontSize: "xx-large",
    },
    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    },
    divTopStyling: {
      backgroundColor: "coral",
      padding: "0 7px",
      borderRadius: "8px",
      marginTop: "-30px",
      width: "fit-content",
      wordBreak: "break-all",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);
function EditDishTag({ open, data }) {
  
  const history = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  useEffect(() => {
    if (data && !form) {
      setForm(data);
    }
  }, [form, setForm]);
  const [initial, setInitial] = useState("general");
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = (e) => {
   window.location.reload()
    open(false);
    const data = {
      dishTagId: form._id,
      name: form.name,
      tagText: form.tagText,
      iconType: form.iconType,
      iconText: form.iconText,
      icon: form.icon,
      tagColor: form.tagColor,
      iconColor: form.iconColor,
    };
    if (form.name != "") {
       dispatch(DishEdit(data, history));
    }
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
    // setInput(e.target.value);
  };
  const [spanText, setSpanText] = useState("");
  const [btnState, setBtnState] = useState("");

  const changeBtnState = (btn) => {
    form.iconType = btn;
    if (form.iconType == "none") {
      form.icon = form.iconText = " ";
    }
    if (form.iconType == "icon") {
      form.iconText = " ";
    }
    if (form.iconType == "text") {
      form.icon = " ";
    }
    setBtnState(btn);
  };
  const [dishData, setDishData] = useState("example");
  const handleInput = (e) => {
    handlefieldchange(e);
    setDishData(e.target.value);
  };
  const handleIconText = (e) => {
    handlefieldchange(e);
    setSpanText(e.target.value);
  };
  const [classnames, setClassName] = useState("");
  const handleIcon = (e) => {
    let str = e.target.className;

    let res = str.replace(/fa-2x/gi, "fa-1x");
    setClassName(res);
  };
  const [backgroundColorset, setBackgroundColor] = useState({
    color: "#8ed1fc",
    backgroundColor: "#ff6900",
    padding: "0 7px",
    borderRadius: "8px",
    marginTop: "-30px",
    width: "fit-content",
    wordBreak: "break-all",
  });

  const [iconStyling, setIconStyling] = useState({
    color: "#8ed1fc",
    backgroundColor: "#ff6900",
    margin: "2px",
  });

  const spanColorChange = (e) => {
    if (e.target.name === "backgroundDiv") {
      setBackgroundColor({
        ...backgroundColorset,
        backgroundColor: e.target.value,
      });
      form.tagColor = e.target.value;
    } else if (e.target.name === "divText") {
      setBackgroundColor({
        ...backgroundColorset,
        color: e.target.value,
      });
    } else if (e.target.name === "spanBackground") {
      setIconStyling({
        ...iconStyling,
        backgroundColor: e.target.value,
      });
      form.iconColor = e.target.value;
    } else if (e.target.name === "spanText1") {
      setIconStyling({
        ...iconStyling,
        color: e.target.value,
      });
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography
          variant="h5"
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          Edit Dish Tag
        </Typography>
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <div>
        <div style={backgroundColorset}>
          {btnState === "icon" ? (
            <span style={iconStyling}>
              <i class={classnames}></i>
            </span>
          ) : btnState === "text" ? (
            <span style={iconStyling}>{spanText}</span>
          ) : (
            ""
          )}
          {dishData}
        </div>
      </div>
      <div className={classes.allbtn}>
        <Button
          style={{ backgroundColor: "lightgray" }}
          onClick={() => setInitial("general")}
        >
          General
        </Button>
        <Button variant="p" onClick={() => setInitial("credential")}>
          Add/Remove From Dishes
        </Button>
      </div>
      {initial === "general" && (
        <>
          <OrderTime
            title="Name"
            inputname="name"
            des="A unique name for your dish tag"
            handlechange={handlefieldchange}
            req={true}
          />
          <OrderTime
            btnname="optional"
            inputname="tagText"
            title="Tag Text"
            des="The text to be displayed beside the tag icon"
            handlechange={handleInput}
            // values={dishData}
          />
          <OrderTime
            btnname="optional"
            inputname="iconType"
            title="Icon Type"
            des="The type of icon to be used for the tag"
            handlechange={handleIconText}
            btngroup1
            values={spanText}
            onClick={handleIcon}
            onButton={changeBtnState}
          />

          <OrderTime
            colors
            btnname="optional"
            inputname="tagColor"
            title="Tag Color"
            des="This determines the main background and text color of the dish tag"
            // handlechange={handlefieldchange}
            spanColorChange={spanColorChange}
            name1="backgroundDiv"
            name2="divText"
          />

          <OrderTime
            colors
            btnname="optional"
            inputname="iconColor"
            title="Icon Color"
            des="This determines the background and text/icon color of the icon component of the dish tag"
            handlechange={handlefieldchange}
            spanColorChange={spanColorChange}
            name1="spanBackground"
            name2="spanText1"
          />
        </>
      )}
      {initial == "credential" && (
        <>
          <RemoveDishes />
        </>
      )}
      <Button className={classes.btn} onClick={handleClick}>
        Save
      </Button>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ overflowY: "auto" }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default EditDishTag;
