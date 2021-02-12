import React from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
      borderBottom: "1px dashed lightgray",
    },
    paper: {
      alignSelf: "center",
      width: "92%",
      height: "40px",
      margin: "15px opx",
    },
  })
);
function TitleValue({ title, value }) {
  const classes = useStyles();
  return (
    <div elevation={5} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="p" style={{fontSize:"14px"}}>{title}</Typography>
        <Typography variant="p" style={{fontSize:"14px"}}>{value}</Typography>
      </div>
    </div>
  );
}

export default TitleValue;
