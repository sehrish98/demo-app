import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Apps,
  Remove,
  Add,
  Visibility,
  Settings,
  Autorenew,
  Help,
  List,
} from "@material-ui/icons";

import OrderIcons from "../../@components/OrderIcons";
import SettingModal from "../../@components/SettingModal";
import OrderReview from "../../@components/OrderReview";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Confirmation from "../../@components/Confirmation";
const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
      alignSelf: "center",
      borderBottom: "1px solid lightgray",
    },
    paper: {
      alignSelf: "center",
      width: "100%",
      margin: "10px 0px 10px 0px",
      position: "relative",
      justifyContent: "center",
    },
    order__review: {
      display: "flex",
      flexDirection: "column",
    },
    order: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
    },
    sub__order: {
      display: "flex",
      flexWrap: "wrap",
      margin: "10px 5px 5px 20px",
      overflowX: "scroll",
      justifyContent: "flex-end",
      alignSelf: "center",
    },
    font__weight: {
      fontWeight: "700",
    },
    btnStyling: {
      width: "150px",
      border: "none",
      color: "black",
      backgroundColor: "white",
      boxShadow: "1px 8px 11px #888888",
      "&:focus": {
        outline: "none",
      },
    },
    btnStyling1: {
      width: "150px",
      border: "none",
      color: "white",
      backgroundColor: "rgb(81, 163, 81)",
      boxShadow: "1px 8px 11px #888888",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        backgroundColor: "rgb(81, 140, 81)",
      },
    },
  })
);

const confirmed_list = [
  {
    bgolor: "rgb(183, 208, 36)",
    title: "Confirmed (Due Soon)",
    content: "Nothing here...",
  },
  {
    bgolor: "rgb(183, 208, 36)",
    title: "Confirmed (Up Comming)",
    content: "Nothing here...",
  },
];
const confirmed_list1 = [
  {
    bgolor: "#81BEFA",
    title: "Confirmed (Due Soon)",
    content: "Nothing here...",
  },
  {
    bgolor: "#81BEFA",
    title: "Confirmed (Up Comming)",
    content: "Nothing here...",
  },
];
const Ready_list = [
  {
    bgolor: "rgb(0, 128, 255)",
    title: "Ready",
    content: "Nothing here...",
  },
  {
    bgolor: "rgb(0, 128, 255)",
    title: "Ready",
    content: "Nothing here...",
  },
];
const On_Route = [
  {
    bgolor: "rgb(0, 191, 255)",
    title: "On Route",
    content: "Nothing here...",
  },
  {
    bgolor: "rgb(0, 191, 255)",
    title: "On Route",
    content: "Nothing here...",
  },
];
const Complete_list = [
  {
    bgolor: "rgb(81, 163, 81)",
    title: "Complete",
    content: "Nothing here...",
  },
  {
    bgolor: "rgb(81, 163, 81)",
    title: "Confirmed (Up Comming)",
    content: "Nothing here...",
  },
];
const Cancel_list = [
  {
    bgolor: "rgb(189, 54, 47)",
    title: "Cancel",
    content: "Nothing here...",
  },
  {
    bgolor: "rgb(189, 54, 47)",
    title: "Confirmed (Up Comming)",
    content: "Nothing here...",
  },
];
const unconfirm_list = [
  {
    bgolor: "rgb(239, 187, 30)",
    title: "Un confirm",
    content: "Nothing here...",
  },
  {
    bgolor: "rgb(239, 187, 30)",
    title: "Un confirm",
    content: "Nothing here...",
  },
];
function Order({ title, value }) {
  const classes = useStyles();
  const [un_confirm, setUn_confirm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [compress, setCompress] = useState(90);
  const IconList = [
    {
      name: "Board",
      icon: <Apps style={{ fontSize: "1rem" }} />,
    },
    {
      name: "List",
      icon: <List style={{ fontSize: "1rem" }} />,
    },
    {
      name: "Compress Layout",
      icon: <Remove style={{ fontSize: "1rem" }} />,
      setstate: setCompress,
      state: compress,
      title: "compress",
    },
    {
      name: "Expand Layout",
      icon: <Add style={{ fontSize: "1rem" }} />,
      setstate: setCompress,
      state: compress,
      title: "expand",
    },
    {
      name: un_confirm ? "Hide Unconfirmed" : "Show Unconfirmed",
      icon: <Visibility style={{ fontSize: "1rem" }} />,
      setstate: setUn_confirm,
      state: un_confirm,
      title: "un_confirm",
    },
    {
      name: "Quick Settings",
      icon: <Settings style={{ fontSize: "1rem" }} />,
      setstate: setOpenModal,
      state: openModal,
      title: "settings",
    },
    {
      name: "Refresh",
      icon: <Autorenew style={{ fontSize: "1rem" }} />,
    },
    {
      name: "Help",
      icon: <Help style={{ fontSize: "1rem" }} />,
    },
  ];
  const handlechange = (e) => {
    if (e == "compress") {
      if (compress >= 60) {
        setCompress(compress - 20);
      }
    } else if (e == "expand") {
      if (compress < 90) {
        setCompress(compress + 20);
      }
    } else if (e == "un_confirm") {
      setUn_confirm(!un_confirm);
    } else if (e == "settings") {
      setOpenModal(!openModal);
    } else {
    }
  };
  const [buttonState, setbutton] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const setComboButton = (e) => {
    console.log("state ios", buttonState);
    setbutton(!buttonState);
  };
  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5" className={classes.font__weight}>
          Order
        </Typography>
        <div style={{ display: "flex" }}>
          {IconList.map((l, index) => (
            <OrderIcons
              icon={l.icon}
              tiptext={l.name}
              i={index}
              route={l.route}
              open={l.setstate}
              state={l.state}
              name={l.title}
              handlechange={() => {
                handlechange(l.title);
              }}
            />
          ))}
        </div>
      </div>
      <div className={classes.order}>
        <div
          className={classes.sub__order}
          style={{
            width: `${compress}%`,
          }}
        >
          {un_confirm && (
            <div className={classes.order__review}>
              {unconfirm_list.map((l, index) => (
                <OrderReview
                  title={l.title}
                  content={l.content}
                  i={index}
                  bg={l.bgolor}
                />
              ))}
            </div>
          )}
          <div className={classes.order__review}>
            {confirmed_list1.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
                handlechange={setComboButton}
              />
            ))}
          </div>
          <div className={classes.order__review}>
            {confirmed_list.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
                handlechange={setComboButton}
              />
            ))}
          </div>
          <div className={classes.order__review}>
            {Ready_list.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
                handlechange={setComboButton}
              />
            ))}
          </div>
          <div className={classes.order__review}>
            {On_Route.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
                handlechange={setComboButton}
              />
            ))}
          </div>
          <div className={classes.order__review}>
            {Complete_list.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
                handlechange={setComboButton}
              />
            ))}
          </div>
          <div className={classes.order__review}>
            {Cancel_list.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
                handlechange={setComboButton}
              />
            ))}
          </div>
        </div>
      </div>
      {buttonState && (
        <>
          <ButtonGroup
            // variant="contained"
            color="lightgray"
            aria-label="contained primary button group"
            style={{ display: "flex", justifyContent: " center" }}
          >
            <Button
              className={classes.btnStyling}
              onClick={() => {
                setOpenConfirm(true);
              }}
            >
              Details
            </Button>
            <Button className={classes.btnStyling1}>Complete</Button>
          </ButtonGroup>
        </>
      )}
      {openModal && <SettingModal open={setOpenModal} />}
      {/* {openConfirm&&<Confirmation open={setOpenConfirm} name={name} email={email} status={status} phoneno={phoneno} />} */}
      {openConfirm && <Confirmation open={setOpenConfirm} />}
    </div>
  );
}

export default Order;
