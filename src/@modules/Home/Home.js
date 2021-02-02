import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import DropDownIcon from "../../@components/DropDownIcon";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import ScheduleDropDown from "../../@components/ScheduleDropDown";
import CustomButton from "../../@components/CustomButton";
import Graphs from "../../@components/Graphs";
import Papers from "../../@components/Papers";
import SimplePaper from "../../@components/SimplePaper";
import DetailOrderPaper from "../../@components/DetailOrderPaper";

const graphData = [
  "3",
  "6",
  "4",
  "7",
  "2",
  "0",
  "5",
  "3",
  "6",
  "4",
  "7",
  "2",
  "0",
  "5",
  "3",
  "6",
  "4",
  "7",
  "2",
  "0",
  "5",
];
const total_order = [
  "10",
  "5",
  "6",
  "8",
  "10",
  "5",
  "6",
  "8",
  "10",
  "5",
  "6",
  "8",
];
const accepted_order = [
  "12/1/2020",
  "10/2/2020",
  "13/5/2020",
  "14/6/2020",
  "3/7/2020",
  "18/9/2020",
  "12/1/2020",
  "10/2/2020",
  "13/5/2020",
  "14/6/2020",
  "3/7/2020",
  "18/9/2020",
  "12/1/2020",
  "10/2/2020",
  "13/5/2020",
  "14/6/2020",
  "3/7/2020",
  "18/9/2020",
];
const Lists = [
  {
    name: "Total Sale",
    total: "PKR 500",
  },
  {
    name: "Total Sale",
    total: "PKR 500",
  },
  {
    name: "Total Sale",
    total: "PKR 500",
  },
  {
    name: "Total Sale",
    total: "PKR 500",
  },
];
const OrderLists = [
  {
    name: "Name",
    title1: "Cash",
    title2: "Card",
    value1: "500$ | 0 | 400$",
    value2: "500$ | 0 | 400$",
  },
  {
    name: "Order Types",
    title1: "Delivery",
    title2: "Dive in",
    value1: "500$ | 0 | 400$",
    value2: "500$ | 0 | 400$",
  },
  {
    name: "Order Completion",
    title1: "Complete",
    title2: "In complete",
    value1: "500$ | 0 | 400$",
    value2: "500$ | 0 | 400$",
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflowX: "scroll",
    },
    detail: {
      alignSelf: "center",
      width: "90%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      placeItems: "center",
    },
    orderlist: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      placeItems: "center",
      justifyContent: "center",
      margin: "10px 0px 0px 0px",
    },
    cusbtn: {
      display: "flex",
      alignSelf: "center",
      width: "92%",
    },
    list_order: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      placeItems: "center",
      justifyContent: "center",
    },
    equally__distribute: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px 10px 0px 0px",
    },
    equally__distribute__up: {
      display: "flex",
      position: "relative",
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const HandleDropDownClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <div className={classes.detail}>
        <Typography variant="h6" color="inherit" style={{ fontWeight: "bold" }}>
          DashBoard
        </Typography>
        <div className={classes.qually__distribute__up}>
          <div className={classes.equally__distribute}>
            <Typography variant="p">Viewing Reports For</Typography>
            <Typography variant="p">Today</Typography>
          </div>
          <div onClick={HandleDropDownClick}>
            <DropDownIcon />
            {open && <ScheduleDropDown open={setOpen} />}
          </div>
        </div>
      </div>
      <div className={classes.list_order}>
        {Lists.map((t) => (
          <Papers title={t.name} value={t.total} />
        ))}
      </div>
      <div className={classes.cusbtn}>
        <CustomButton name="Sales" activ="true" />
        <CustomButton name="Order" />
      </div>
      <Graphs
        title="Total Accepted Order"
        text1="Total Order"
        text2="Accepted Order"
        xaxis={accepted_order}
        yaxis={total_order}
        onelinecolor="rgb(238, 82, 82)"
        seclinecolor="#F39A8F"
        xlabel="Date"
        ylabel="no of Orders"
        graphData={graphData}
      />
      <div className={classes.orderlist}>
        {OrderLists.map((t, index) => (
          <DetailOrderPaper list={t} />
        ))}
      </div>
      <SimplePaper title="Dish Count" value="30" />
    </div>
  );
};
export default Home;
