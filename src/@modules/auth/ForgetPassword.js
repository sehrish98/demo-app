import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import { useHistory } from "react-router-dom";
import BtnCustom from "../../@components/BtnCustom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(61, 54, 54)",
    },
    secondary: {
      main: "rgb(61, 54, 54)",
    },
  },
});
const useStyles = makeStyles({
  img: {
    marginBottom: "-40px",
    height: "90px",
    width: "90px",
    alignItems: "center",zIndex:"1000"
  },
  login: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  cards__px: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
  },
  form: {
    paddingLeft: "20px",
    paddingRight: "20px",
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
  cardContent: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  small: {
    display: "flex",
    alignItems: "start",
    color: "gray",
    marginTop: "5px",
    textAlign: "center",
  },
  card: {
    maxWidth: "470px",
    height: "300px",
    borderRadius: "3px",
    [theme.breakpoints.down('sm')]: {
      maxWidth: "420px",
      margin:"10px"
    },
  },
  typo: {
    fontWeight: "bold",
    marginTop: "30px",
  },
  cardAction: {
    justifyContent: "center",
  },
  go__link: {
    textDecoration: "none",
    color: "rgb(238, 82, 82)",
    marginLeft: "5px",
    marginTop: "1px",
    cursor:"pointer"
  },
});
export default function ForgetPassword() {
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const handleLoginClick = (e) => {
    e.preventDefault();
    history.push("/login");
 };
  const handleClick = () => {
    history.push("/login");
  };
  return (
    <div className={classes.login}>
      <img
        className={classes.img}
        src="https://dol98aud6tbh0.cloudfront.net/assets/images/logos/main-logo-flat-small.png"
        alt="logo"
      />
      <div className={classes.cards__px} style={{}}>
        <Card className={classes.card} elevation={5}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" className={classes.typo}>
              Forget Password
            </Typography>
            <MuiThemeProvider theme={theme}>
              <form name="loginForm" noValidate className={classes.form}>
                <small className={classes.small}>
                  Enter your Email and we will send you a link to reset your
                  password
                </small>
                <p style={{ marginTop: "20px"  , marginBottom:"1px" }}>Email*</p>
                <TextField
                  autoFocus={false}
                  type="email"
                  name="email"
                  required={true}
                  fullWidth
                  onChange={(e) => setUsername(e.target.value)}
                />
                <CardActions
                  className={classes.cardAction}
                  onClick={handleLoginClick}
                >
                  <BtnCustom title="Submit" type="submit" />
                </CardActions>
              </form>
            </MuiThemeProvider>
            <small className={classes.small}>
              Dont have an account?
              <p className={classes.go__link} onClick={handleClick}>
                Sign In
              </p>
            </small>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
