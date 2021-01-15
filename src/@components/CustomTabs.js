import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import StoreIcon from "@material-ui/icons/Store";
import PeopleIcon from "@material-ui/icons/People";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    justifyItems: "start",
  },
});

export default function CustomTabs({ item1, item2, item3, item4, item5 }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = React.useState(0);
  const handleChange = () => {
    // setValue(n);
  };
  return (
      <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        variant="scrollable"
        scrollButtons="off"
        className={classes.root}
      >
        <Tab label={item1} onClick={()=>setTab(0)}/>
        <Tab label={item2} onClick={()=>setTab(1)}/>
        <Tab label={item3} onClick={()=>setTab(2)}/>
        <Tab label={item4} onClick={()=>setTab(2)}/>
        <Tab label={item5} onClick={()=>setTab(2)}/>
      </Tabs>
      {
        tab==0&&<h5></h5>
      }
            {
        tab==1&&<h5></h5>
      }
            {
        tab==2&&<h5></h5>
      }
    </>
  );
}
