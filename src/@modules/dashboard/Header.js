import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Language, Lock, ArrowDropDown, Person } from "@material-ui/icons";

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
  })
);
function Header() {
  const classes = useStyles();
  return (
    <div elevation={5} className={classes.paper}>
      <div>
        <Language />
        {/* English */}
        <select style={{border:"0" , backgroundColor:"#ececec", marginLeft:"5px"}}>
            <option>English</option>
            <option>Japniese</option>
            <option>English</option>
        </select>
        {/* <ArrowDropDown /> */}
      </div>
      <div style={{display:"flex",}}>
          <div style={{marginRight:"10px", display:"flex", alignItems:"center"}} >
          <Person />
        Guest
          </div>
        <div style={{marginRight:"10px", display:"flex", alignItems:"center"}}>
        <Lock fontSize="small" />
        SignUp/Login
        </div>
      </div>
    </div>
  );
}

export default Header;
