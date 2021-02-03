import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import CustomAccordin from "./CustomAccordin";
import GeneralAccordin from "./GeneralAccordin";

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      Width: "720px",
      margin: "0px auto",
    },
    paper: {
      width: "100%",
      marginBottom: "60px",
    },
    general: {
      width: "100%",
      alignItems: "center",
    },
    subdetail: {
      padding: "10px 20px",
      display: "flex",
      fontWeight: "500",
      width: "100%",
      backgroundColor: "rgb(247, 247, 247)",
      borderTop: "1px solid rgb(230, 230, 230)",
    },
  })
);

function General() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div className={classes.detail}>
        <div className={classes.general}>
          <Typography variant="p" className={classes.subdetail}>Bussiness</Typography>
          <CustomAccordin
            title="General"
            color="white"
            open={<GeneralAccordin />}
          />
        </div>
      </div>
    </div>
  );
}

export default General;
