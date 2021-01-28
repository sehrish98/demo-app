import React from "react";
import {Typography} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      alignSelf: "center",
      width: "100%",
      padding:"60px 20px 60px 20px",
      color:"white",
      backgroundColor:"#2d2d2d",
      display:"flex",
      placeItems:"center",
      justifyContent:"center",
    //   marginTop:"100px"
    },
  })
);
function Footer({ title, value }) {
  const classes = useStyles();
  return (
    <div elevation={5} className={classes.paper}>
        <Typography variant="p" style={{  }}>
        Powered By CloudWaitress
        </Typography>
    </div>
  );
}

export default Footer;
