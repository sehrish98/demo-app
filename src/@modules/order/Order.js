import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {Apps ,Remove,Add,Visibility,Settings,Autorenew ,Help,List} from "@material-ui/icons";

import OrderIcons from "../../@components/OrderIcons";
import SettingModal from "../../@components/SettingModal";
import OrderReview from "../../@components/OrderReview";
const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
      // position:"absolute",
      alignSelf:"center"
    },
    paper: {
      alignSelf: "center",
      width: "100%",
      margin: "10px 0px 10px 0px",
      position:"relative",
      justifyContent:"center",
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
      setstate:setCompress,
      state:compress,
      title:"compress"
    },
    {
      name: "Expand Layout",
      icon: <Add style={{ fontSize: "1rem" }} />,
      setstate:setCompress,
      state:compress,
      title:"expand"
    },
    {
      name: un_confirm ? "Hide Unconfirmed":"Show Unconfirmed",
      icon: <Visibility style={{ fontSize: "1rem" }} />,
      setstate:setUn_confirm,
      state:un_confirm,
      title:"un_confirm"
    },
    {
      name: "Quick Settings",
      icon: <Settings style={{ fontSize: "1rem" }} />,
      state:setOpenModal
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
  return (
    <div className={classes.paper}>
      <div
        style={{ borderBottom: "1px solid lightgray" }}
        className={classes.detail}
      >
        <Typography variant="h5" style={{ fontWeight: "700" }}>
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
            />
          ))}
        </div>
      </div>
      <div style={{display:"flex", alignItems:"center", width:"100%", justifyContent:"center"}}>
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          margin: "10px 5px 5px 20px",
          width: `${compress}%`,
          overflowX: "scroll",
          justifyContent:"flex-end",
          alignSelf:"center"
        }}
      >
        {un_confirm && (
          <div style={{ display: "flex", flexDirection: "column" }}>
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

        <div style={{ display: "flex", flexDirection: "column" }}>
          {confirmed_list.map((l, index) => (
            <OrderReview
              title={l.title}
              content={l.content}
              i={index}
              bg={l.bgolor}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Ready_list.map((l, index) => (
            <OrderReview
              title={l.title}
              content={l.content}
              i={index}
              bg={l.bgolor}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {On_Route.map((l, index) => (
            <OrderReview
              title={l.title}
              content={l.content}
              i={index}
              bg={l.bgolor}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Complete_list.map((l, index) => (
            <OrderReview
              title={l.title}
              content={l.content}
              i={index}
              bg={l.bgolor}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Cancel_list.map((l, index) => (
            <OrderReview
              title={l.title}
              content={l.content}
              i={index}
              bg={l.bgolor}
            />
          ))}
        </div>
      </div>
      </div>
      {
          openModal&&<SettingModal open={setOpenModal} />
      }
    </div>
  );
}

export default Order;
