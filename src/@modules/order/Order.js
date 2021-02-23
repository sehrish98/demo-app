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

import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../../@store/orders/Order.Actions";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOrder());
  }, [dispatch]);
  const classes = useStyles();
  const [un_confirm, setUn_confirm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [compress, setCompress] = useState(90);
  const [confirm, setConfirm] = useState(90);
  const orderList = useSelector(({ order__Reducer }) => order__Reducer.orders);
  console.log("hi i m sehrish:", orderList);
  orderList.map((m)=>{
    if(m.status=="un_confirmed")
    {
      setUn_confirm(m)
    }
    else if(m.status=="confirmed"){
      setConfirm(m)
    }
  })
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
          <div className={classes.order__review}>
            {orderList?.map((l) =>
              l.status == "un_confirmed" ? (
                <OrderReview
                  title="Un Confirmed"
                  content="jhjgjgjg"
                  // i={index}
                  bg="rgb(239, 187, 30)"
                />
              ) : l.status == "confirmed" ? (
                <OrderReview
                  title="confirmed"
                  content="puneeet mera"
                  // i={index}
                  bg="rgb(183, 208, 36)"
                />
              ) : l.status == "Ready" ? (
                <OrderReview
                  title="Ready"
                  content="puneeet mera"
                  // i={index}
                  bg="rgb(0, 128, 255)"
                />
              ) : l.status == "complete" ? (
                <OrderReview
                  title="confirmed"
                  content="puneeet mera"
                  // i={index}
                  bg="rgb(81, 163, 81)"
                />
              ) : l.status == "in complete" ? (
                <OrderReview
                  title="confirmed"
                  content="puneeet mera"
                  // i={index}
                  bg="rgb(183, 208, 36)"
                />
              ) : l.status == "cancel" ? (
                <OrderReview
                  title="confirmed"
                  content="puneeet mera"
                  // i={index}
                  bg="rgb(189, 54, 47)"
                />
              ) : (
                ""
              )
            )}
          </div>

          {orderList?.map(( li,) => {
            console.log("guguiihui", l.status, i);
            return l.status == "un_confirmed" ? (
              <OrderReview
                title="Un Confirmed"
                content="jfhdvujdrfhgrfh"
                // i={index}
                bg="black"
              />
            ) : (
              <OrderReview
                title="un confirmed"
                content="Nothing is here"
                // i={index}
                bg="pink"
              />
            );
          })}

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
            {confirmed_list.map((l, index) => (
              <OrderReview
                title={l.title}
                content={l.content}
                i={index}
                bg={l.bgolor}
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
              />
            ))}
          </div>
        </div>
      </div>
      {openModal && <SettingModal open={setOpenModal} />}
    </div>
  );
}

export default Order;
