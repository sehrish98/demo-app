import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import CustomButton from "./CustomButton";
import OrderTime from "./OrderTime";

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      Width: "720px",
      margin: "0px auto",
    },
    paper: {
      width: "100%",
      marginTop: "20px",
      marginBottom: "60px",
      //   padding: "20px 30px",
    },
    general: {
      width: "100%",
      alignItems: "center",
    },
  })
);

function GeneralAccordin() {
  const classes = useStyles();
  return (
    <div style={{ width: "100%" }}>
      <OrderTime
        value="Papa Booms"
        btnname="optional"
        title="Name"
        des="The name of this restaurant location, used throughout the system"
      />
      <OrderTime
        value="English"
        title="System Locale"
        des="Determines your default store language and how certain dates / currencies are formatted"
      />
      <OrderTime
        value="Kilometres"
        title="Kilometres/Miles"
        des="Determines your preferred distance unit"
      />{" "}
      <OrderTime
        value="Asia/Karachi"
        title="Timezone"
        des="Select the timezone this restaurant location resides in to ensure accurate timings"
      />
      <OrderTime
        checked
        value="Asia/Karachi"
        title="Timezone"
        des="Enable this if all your store prices are already inclusive of tax. If disabled, taxes will be calculated and added to an order's total cost"
      />
      <OrderTime
        btn
        value="Create New Tax"
        title="Timezone"
        des="Taxes are calculated from top to bottom if compounded"
      />
      <center style={{ margin: "15px" }}>
        <CustomButton name="Save" activ />
      </center>
    </div>
  );
}

export default GeneralAccordin;
