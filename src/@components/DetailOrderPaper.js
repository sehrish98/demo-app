import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "30%",
      display: "flex",
      flexDirection: "column",
      margin: "10px 6px 10px 6px",
    },
    item: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "13px",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
    },
  })
);
function DetailOrderPaper({ list }) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.item}>
        <Typography variant="p" style={{ fontWeight: "700" }}>
          {list.name}
        </Typography>
        <Typography variant="p" style={{ fontSize: "14px" }}>
          Sales|Counts|Tips
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="p" style={{ fontWeight: "700" }}>
          {list.title1}
        </Typography>
        <Typography variant="p" style={{ fontSize: "14px" }}>
          {list.value1}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="p" style={{ fontWeight: "700" }}>
          {list.title2}
        </Typography>
        <Typography variant="p" style={{ fontSize: "14px" }}>
          {list.value2}
        </Typography>
      </div>
    </Paper>
  );
}
export default DetailOrderPaper;
