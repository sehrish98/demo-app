import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import { useHistory } from "react-router-dom";

import CustomTabs from "./CustomTabs";
import General from "./General"

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      width: "100%",
      maxWidth: "720px",
      display: "flex",
      flexDirection: "column",
      padding: "8px",
      alignItems: "center",
      margin: "0px auto",
    },
    paper: {
      width: "100%",
      marginTop: "20px",
      padding: "0px 30px",
    },
    tabs:{
        backgroundColor:"white"
    },
    title:{
      marginBottom: "10px",
      display:"flex",
      marginLeft:"0px",
      justifyItems:"start"
    }
  })
);

function Settings() {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {let role =localStorage.getItem("role")
  if(role === "STAFF"||role === "CASHIER"){
    history.push("/order")
  }
  }, []);
  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <Typography
          variant="h4"
          className={classes.title}
        >
          Settings
        </Typography>
        <div className={classes.tabs}>
          <CustomTabs
            item1="System"
          />
          <General />
        </div>
      </div>
    </div>
  );
}

export default Settings;
