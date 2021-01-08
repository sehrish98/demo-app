import React from "react";
import AppBars from "../@components/AppBars";
import SideBar from "../@components/SideBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
    },
    content: {
      flexGrow: 0.95,
      padding: theme.spacing(2),
      justifyContent: "center",
    },
  })
);

const Layout = (props) => {
  const classes = useStyles();
  return (
    <>
      <div style={{ top: 0, position: "sticky", zIndex: "999" }}>
        <AppBars />
      </div>
      <div className={classes.root}>
        <SideBar />
        <div className={classes.content}>{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
