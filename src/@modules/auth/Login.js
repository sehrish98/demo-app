import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
  InputLabel,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput
} from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

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
});
export default function Login({ data, details }) {
  const classes = useStyles();

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
            <form name="loginForm" noValidate className={classes.form}>
              <MuiThemeProvider theme={theme}>
                <TextField
                  style={{ marginBottom: "20px" }}
                  label="User Name"
                  autoFocus={false}
                  type="text"
                  name="name"
                  required
                  fullWidth
                  //   onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                  autoFocus={false}
                  className="mb-16"
                  label="Password"
                  type="password"
                  name="password"
                  required
                  fullWidth
                  //   onChange={(e) => setPassword(e.target.value)}
                />
                <CardActions className={classes.cardAction}>
                  <BtnCustom title="Log in" />
                </CardActions>
              </MuiThemeProvider>
            </form>
            <small className={classes.small}>
              Dont have an account?
              <a
                to={"/login"}
                style={{ textDecoration: "none", color: "rgb(238, 82, 82)" , marginLeft:"5px" }}
              >
                Sign up
              </a>
            </small>
            <small className={classes.small}>
              Forgot your password?
              <a
                to={"/login"}
                style={{ textDecoration: "none", color: "rgb(238, 82, 82)", marginLeft:"5px" }}
              >
                Reset Password
              </a>
            </small>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
