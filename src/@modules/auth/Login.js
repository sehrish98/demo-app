import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardActions,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { useHistory } from "react-router-dom";

import BtnCustom from "../../@components/BtnCustom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    alignItems: "center",
    zIndex: "1000",
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
    [theme.breakpoints.down("sm")]: {
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
    textAlign: "center",
  },
  card: {
    maxWidth: "470px",
    height: "350px",
    borderRadius: "3px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "420px",
      margin: "10px",
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
    cursor: "pointer",
  },
});
export default function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  
  const handleLoginClick = (e) => {
    e.preventDefault();
    if (
      username.length > 0 &&
      password.length > 0 &&
      username == "admin@gmail.com" &&
      password == "admin1234"
    ) {
      history.push("/");
    } else {
      setOpen(true);
    }
  };
  const handleClick = () => {
    history.push("/forget-password");
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="error">
           Invalid Credentials
        </Alert>
      </Snackbar>
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
                    <BtnCustom title="Log in" type="submit" />
                  </CardActions>
                </form>
              </MuiThemeProvider>
              <small className={classes.small}>
                Forgot your password?
                <p className={classes.go__link} onClick={handleClick}>
                  Forget Password
                </p>
              </small>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
