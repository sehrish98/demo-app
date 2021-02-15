import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import { CreateDishes } from "src/@store/dish/Dish.Actions";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

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
function CreateDishTag({ open }) {
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  let dta = {
    name: "",
    displayName: "",
    description: "",
  };
  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const [initial, setInitial] = useState("general");
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [spanText, setSpanText] = useState("");
  const handleClose = () => {
    open(false);
  };
  const handleClick = () => {
    const { name } = form;
    if (name != "") {
      dispatch(CreateDishes(form, history));
    }
  };
  const [btnState, setBtnState] = useState("");

  const changeBtnState = (btn) => {
    console.log("ASDasda", btn);
    setBtnState(btn);
  };
  const [dishData, setDishData] = useState("example");
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
    // setInput(e.target.value);
  };
  const handleInput = (e) => {
    setDishData(e.target.value);
  };
  const handleIconText = (e) => {
    setSpanText(e.target.value);
  };
  const [classnames, setClassName] = useState("");
  const handleIcon = (e) => {
    let str = e.target.className;
    console.log("vbefore", str);
    let res = str.replace(/fa-2x/gi, "fa-1x");
    console.log(res);
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
    console.log("selected elemnt name is:", e.target.name);
    if (e.target.name === "backgroundDiv") {
      setBackgroundColor({
        ...backgroundColorset,
        backgroundColor: e.target.value,
      });
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
    } else if (e.target.name === "spanText1") {
      setIconStyling({
        ...iconStyling,
        color: e.target.value,
      });
    }
  };
  const [opened, setOpen] = React.useState(false);
  const [opened1, setOpen1] = React.useState(false);
  const [opened2, setOpen2] = React.useState(false);
  const [opened3, setOpen3] = React.useState(false);
  const handleClickList = () => {
    setOpen(!opened);
  };
  const handleClickList1 = () => {
    setOpen1(!opened1);
  };
  const handleClickList2 = () => {
    setOpen2(!opened2);
  };
  const handleClickList3 = () => {
    setOpen3(!opened3);
  };
  let [inputCheck, setInputCheck] = useState(false);
  let [inputCheck1, setInputCheck1] = useState(false);
  let [inputCheck2, setInputCheck2] = useState(false);
  let [inputCheck3, setInputCheck3] = useState(false);
  let [inputState, setInputState] = useState(false);
  let [inputPizza, setInputPizza] = useState(false);
  let [inputCombo, setInputCombo] = useState(false);
  const checkedInput = () => {
    setInputCheck(!inputCheck);
  };
  const checkedInput1 = () => {
    if (inputState) {
      setInputState(false);
      setInputCheck1(false);
      setInputCheck2(true);
      setInputCheck3(true);
    }
    setInputCheck1(!inputCheck1);
  };
  const checkedInput2 = () => {
    if (inputState) {
      setInputState(false);
      setInputCheck1(true);
      setInputCheck2(false);
      setInputCheck3(true);
    }
    setInputCheck2(!inputCheck2);
  };
  const checkedInput3 = () => {
    if (inputState) {
      setInputState(false);
      setInputCheck1(true);
      setInputCheck2(true);
      setInputCheck3(false);
    }
    setInputCheck3(!inputCheck3);
  };
  const onClickInputState = () => {
    setInputCheck1(!inputCheck1);
    setInputCheck2(!inputCheck2);
    setInputCheck3(!inputCheck3);
    setInputState(!inputState);
  };

  const setCheckInput4 = () => {
    setInputCombo(!inputCombo);
    setInputPizza(!inputPizza);
  };
  const inputComboSet = () => {
    setInputCombo(!inputCombo);
    setInputPizza(!inputPizza);
  };
  const [menuState, setMenu] = useState(false);
  useEffect(() => {
    if (inputCheck1 && inputCheck2 && inputCheck3 && inputPizza) {
      setMenu(true);
      setInputCombo(true);
    }
  
   if (!inputCheck1 || !inputCheck2 || !inputCheck3) {
      setInputState(false);
    }
    if (!inputPizza || !inputCombo) {
      setInputCombo(false);
      setInputPizza(false);
    }
   console.log("hit");
  }, [inputCheck1, inputCheck2, inputCheck3, inputPizza, inputCombo]);

  const setMenuState = () => {
    if (inputCombo && inputState) {
      setMenu(true);
      setInputCombo(false);
      setInputState(false);
    } else {
      setMenu(!menuState);
      setInputPizza(!inputPizza);
      setInputCheck1(!inputCheck1);
      setInputCheck2(!inputCheck2);
      setInputCheck3(!inputCheck3);
    }
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Create Dish Tags</Typography>

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
      <form>
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
              value={dishData}
            />
            <OrderTime
              btnname="optional"
              inputname="description"
              title="Icon Type"
              des="The type of icon to be used for the tag"
              handlechange={handleIconText}
              btngroup
              value={spanText}
              onClick={handleIcon}
              onButton={changeBtnState}
            />
            {/* <OrderTime
              btnname="optional"
              inputname="displayName"
              title="Icon Text"
              des="The text to be displayed inside the icon on the dish tag"
              handlechange={handlefieldchange}
            /> */}
            <OrderTime
              colors
              btnname="optional"
              inputname="displayName"
              title="Tag Color"
              des="This determines the main background and text color of the dish tag"
              handlechange={handlefieldchange}
              spanColorChange={spanColorChange}
              // valueIcon={false}
              name1="backgroundDiv"
              name2="divText"
            />
            <OrderTime
              colors
              btnname="optional"
              inputname="displayName"
              title="Icon Color"
              des="This determines the background and text/icon color of the icon component of the dish tag"
              handlechange={handlefieldchange}
              spanColorChange={spanColorChange}
              // valueIcon={true}
              name1="spanBackground"
              name2="spanText1"
            />
          </>
        )}
        {initial == "credential" && (
          <>
            <ListItem button>
              {opened ? (
                <ExpandLess button onClick={handleClickList} />
              ) : (
                <ExpandMore button onClick={handleClickList} />
              )}
              <input
                type="checkbox"
                checked={inputCombo && inputState ? true : menuState}
                onClick={setMenuState}
              />
              <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                {" "}
                New Menu{" "}
              </label>
            </ListItem>
            <Collapse in={opened} timeout="auto" unmountOnExit>
              <Collapse in={opened} timeout="auto" unmountOnExit>
                <ListItem button>
                  <div style={{ marginLeft: "48px", marginTop: "-13px" }}>
                    {opened1 ? (
                      <ExpandLess button onClick={handleClickList1} />
                    ) : (
                      <ExpandMore button onClick={handleClickList1} />
                    )}
                    <input
                      type="checkbox"
                      checked={inputPizza || menuState ? true : inputCombo}
                      onClick={inputComboSet}
                    />
                    <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                      {" "}
                      Combo Deals{" "}
                    </label>
                  </div>
                </ListItem>
              </Collapse>

              <Collapse in={opened1} timeout="auto" unmountOnExit>
                <ListItem button>
                  <div style={{ marginLeft: "96px", marginTop: "-13px" }}>
                    <input
                      type="checkbox"
                      onClick={setCheckInput4}
                      checked={inputCombo ? true : inputPizza}
                    />
                    <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                      {" "}
                      2 Pizza & 1 sides{" "}
                    </label>
                  </div>
                </ListItem>
              </Collapse>

              <Collapse in={opened} timeout="auto" unmountOnExit>
                <ListItem button>
                  <div style={{ marginLeft: "48px", marginTop: "-13px" }}>
                    {opened3 ? (
                      <ExpandLess button onClick={handleClickList3} />
                    ) : (
                      <ExpandMore button onClick={handleClickList3} />
                    )}
                    <input
                      type="checkbox"
                      checked={
                        (inputCheck1 && inputCheck2 && inputCheck3) || menuState
                          ? true
                          : inputState
                      }
                      onClick={onClickInputState}
                      // checked="checked"
                    />
                    <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                      {" "}
                      Sides{" "}
                    </label>
                  </div>
                </ListItem>
              </Collapse>

              <Collapse in={opened3} timeout="auto" unmountOnExit>
                <ListItem button>
                  <div style={{ marginLeft: "96px", marginTop: "-13px" }}>
                    <input
                      type="checkbox"
                      onClick={checkedInput1}
                      checked={inputState ? true : inputCheck1}
                    />
                    <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                      {" "}
                      Garlic Bread{" "}
                    </label>
                  </div>
                </ListItem>
                <ListItem button>
                  <div style={{ marginLeft: "96px", marginTop: "-13px" }}>
                    <input
                      type="checkbox"
                      onClick={checkedInput2}
                      checked={inputState ? true : inputCheck2}
                    />
                    <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                      {" "}
                      Fries{" "}
                    </label>
                  </div>
                </ListItem>
                <ListItem button>
                  <div style={{ marginLeft: "96px", marginTop: "-13px" }}>
                    <input
                      type="checkbox"
                      onClick={checkedInput3}
                      checked={inputState ? true : inputCheck3}
                    />
                    <label style={{ marginLeft: "11px", marginTop: "7px" }}>
                      {" "}
                      Freid Chicken{" "}
                    </label>
                  </div>
                </ListItem>
              </Collapse>
            </Collapse>

            {/* <OrderTime
              title="Name"
              des="A unique name for your menu"
              inputname="name"
            />
            <OrderTime
              button
              btnname="optional"
              title="Display Name"
              des="Will override the unique name in your store"
            />
            <OrderTime
              button
              btnname="optional"
              title="Description"
              des="The number of outstanding orders before an increase in wait time is applied"
            /> */}
          </>
        )}
        <Button className={classes.btn} onClick={handleClick} type="submit">
          Save
        </Button>
      </form>
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

export default CreateDishTag;
