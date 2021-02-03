import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Language, Lock, Person } from "@material-ui/icons";

import CustomDropDown from "../../@components/CustomDropDown";
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      alignSelf: "center",
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: "1240px",
      padding: "10px",
    },
    header__right: {
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
    },
    header__left:{
      display:"flex",
    }
  })
);
function Header() {
  const classes = useStyles();
  return (
    <div elevation={5} className={classes.paper}>
      <div className={classes.header__left}>
        <Language />
        <CustomDropDown title="" options={["English", "Japnies"]} />
      </div>
      <div style={{ display: "flex" }}>
        <div className={classes.header__right}>
          <Person />
          Guest
        </div>
        <div className={classes.header__right}>
          <Lock fontSize="small" />
          SignUp/Login
        </div>
      </div>
    </div>
  );
}

export default Header;
