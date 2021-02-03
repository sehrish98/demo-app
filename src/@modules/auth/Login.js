import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
  FormControl,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogin } from "../../@store/auth/Auth.Actions";
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
    marginBottom: "20px",
    height: "70px",
    width: "70px",
    alignItems: "center",
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
    // borderBottom:"1px solid lightgray",
    // borderTop:"1px solid lightgray",
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
    marginTop: "20px",
    textAlign: "center",
  },
  card: {
    maxWidth: "470px",
    height: "400px",
    borderRadius: "3px",
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
  },
});
export default function Login({ data, details }) {
  const history=useHistory()
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginClick = (e) => {
    e.preventDefault()
    const obj = {
      email: username,
      password: password,
    };
    dispatch(userLogin(obj , history));
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
            <Typography variant="h4" className={classes.typo}>
              Login
            </Typography>
            <MuiThemeProvider theme={theme}>
              <form name="loginForm" noValidate className={classes.form}>
                <TextField
                  style={{ marginBottom: "20px" }}
                  label="Email"
                  autoFocus={false}
                  type="email"
                  name="email"
                  required={true}
                  fullWidth
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  autoFocus={false}
                  className="mb-16"
                  label="Password"
                  type="password"
                  name="password"
                  required={true}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
                <CardActions
                  className={classes.cardAction}
                  onClick={handleLoginClick}
                >
                  <BtnCustom title="Log in" type="submit"/>
                </CardActions>
              </form>
            </MuiThemeProvider>
            <small className={classes.small}>
              Dont have an account?
              <a to={"/login"} className={classes.go__link}>
                Sign up
              </a>
            </small>
            <small className={classes.small}>
              Forgot your password?
              <a to={"/login"} className={classes.go__link}>
                Reset Password
              </a>
            </small>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
