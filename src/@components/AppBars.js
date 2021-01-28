import React from "react";
import {
  createStyles,
  makeStyles,
  createMuiTheme,
  withStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  AppBar,
  Tooltip,
  Typography,
  Toolbar,
  IconButton,
  Badge,
} from "@material-ui/core";
import { ArrowBack, Notifications, PowerSettingsNew } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { userloggedOut } from "../@store/auth/Auth.Actions";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "rgb(61, 54, 54)",
    },
    appBar: {
      height: 60,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "12px",
        backgroundColor: "black",
      },
    },
  },
});
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "red",
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    Toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "7px 20px 7px 20px",
    },
    nav__right: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "bold",
    },
    notify: {
      marginRight: "10px",
      cursor: "pointer",
    },
  })
);
const StyledBadge = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
        cursor: "pointer",
      },
    },
  })
)(Badge);
export default function AppBars() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleLoggout=()=>{
    const client=localStorage.getItem("clientId")
    // const obj={
    //   _id:client
    // }
    dispatch(userloggedOut())
  }
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar variant="dense" className={classes.Toolbar}>
            <div className={classes.nav__right}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ArrowBack />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                style={{ fontWeight: "bold" }}
              >
                Papa Booms
              </Typography>
            </div>
            <div className={classes.nav__right}>
              <StyledBadge overlap="circle" variant="dot">
                <Notifications className={classes.notify} />
              </StyledBadge>
              <IconButton>
                <Tooltip title="Loggout">
                  <PowerSettingsNew 
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={handleLoggout}
                  />
                </Tooltip>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}
