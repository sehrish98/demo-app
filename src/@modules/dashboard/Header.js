import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Language,ExitToApp, Person } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import CustomDropDown from "../../@components/CustomDropDown";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "100%",
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: "1240px",
      padding: "10px 10px 10px 10px",
    },
    header__right: {
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    header__left: {
      display: "flex",
    },
  })
);
function Header() {
  const history = useHistory();
  const classes = useStyles();
  const handleClick = () => {
    history.push("/profile");
  };
  const handleLoggoutClick = () => {
    history.push("/login");
  };
  return (
    <div elevation={5} className={classes.paper}>
      <div className={classes.header__left}>
        <Language />
        <CustomDropDown title="" options={["English", "Japnies"]} />
      </div>
      <div style={{ display: "flex" }} >
        <div className={classes.header__right} onClick={handleClick}>
          <Person />
          Admin
        </div>
        <div className={classes.header__right} onClick={handleLoggoutClick}>
          <ExitToApp />
          Log out
        </div>
      </div>
    </div>
  );
}

export default Header;
