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
      <div
        style={{ borderBottom: "1px dashed lightgray" }}
        className={classes.detail}
      >
        <Typography variant="p">{title}</Typography>
        <Typography variant="p">{value}</Typography>
      </div>
    </div>
  );
}

export default TitleValue;
