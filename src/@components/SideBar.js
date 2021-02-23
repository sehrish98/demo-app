import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Drawer, Toolbar } from "@material-ui/core/";
import {
  Home,
  Lock,
  DateRange,
  RestaurantMenu,
  Person,
  Settings,
  Input,
  Description,
} from "@material-ui/icons";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ListItems from "./ListItems";

const drawerWidth = 65;
const list = [
  {
    name: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    name: "Order",
    icon: <Lock />,
    route: "/order",
  },
  {
    name: "booking",
    icon: <DateRange />,
    route: "",
  },
  {
    name: "Menu",
    icon: <RestaurantMenu />,
    route: "/menu",
  },
  {
    name: "Staff",
    icon: <Person />,
    route: "/staff",
  },
  {
    name: "Settings",
    icon: <Settings />,
    route: "/settings",
  },
  {
    name: "View Source",
    icon: <Input />,
    route: "",
  },
  {
    name: "Documentation",
    icon: <Description />,
    route: "",
  },
  // {
  //   name: "Cashier",
  //   icon: <MonetizationOnIcon />,
  //   route: "/cashier",
  // },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "10px",
      display: "flex",
    },
    appBar: {
      zIndex: "99",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        style={{ zIndex: "400" }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {list.map((l, index) => (
            <ListItems
              icon={l.icon}
              tiptext={l.name}
              i={index}
              route={l.route}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
}
