import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, TextField, CardActions, Snackbar } from "@material-ui/core";
import { Facebook, Twitter } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

import Header from "../dashboard/Header";
import NavBar from "../dashboard/NavBar";
import BtnCustom from "../../@components/BtnCustom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      height: "95vh",
      display: "flex",
      alignItems: "center",
      width: "100%",
      marginTop: "-20px",
      backgroundColor: "rgb(255 255 255)",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        height: "136vh",
        marginTop: "0px",
        padding: "10px",
      },
    },
    main: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    img: {
      height: "60px",
      width: "60px",
    },
    title: {
      fontFamily: "sans-serif",
      marginBottom: "-10px",
      fontSize: "16px",
    },
    titleEmail: {
      marginBottom: "-10px",
      fontSize: "14px",
      color: "gray",
    },
    smallText: {
      marginTop: "-5px",
      fontSize: "12px",
      color: "gray",
    },
    heading: {
      paddingBottom: "5px",
      fontWeight: "bold",
      marginBottom: "2px",
      fontSize: "14px",
    },
    facebook: {
      color: "#4267B2",
      height: "30px",
      width: "30px",
      marginRight: "8px",
    },
    twitter: {
      color: "#1DA1F2",
      height: "60px",
      width: "30px",
      marginRight: "8px",
      fontSize: "54px",
    },
    left__profile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "50vh",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        height: "20vh",
      },
    },
    right__profile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "60vh",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        height: "30vh",
      },
    },
    header: {
      top: 0,
      position: "sticky",
      zIndex: "999",
      backgroundColor: "#ececec",
    },
  })
);
function Profile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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
        <Alert onClose={handleClose} severity="success">
          Profile Updated Successfully
        </Alert>
      </Snackbar>
      <div className={classes.header}>
        <Header />
        <NavBar />
      </div>
      <div elevation={5} className={classes.paper}>
        <div className={classes.main}>
          <div className={classes.left__profile}>
            <img
              className={classes.img}
              src="https://dol98aud6tbh0.cloudfront.net/assets/images/logos/main-logo-flat-small.png"
              alt="logo"
            />
            <p className={classes.title}>Sehrish Munir</p>
            <p className={classes.titleEmail}>sehrishmunir143@gmail.com</p>
            <p className={classes.title}>Pakistan</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "0.35",
            }}
          >
            <h4 style={{textAlign:"center"}}>Edit Profile</h4>
            <TextField
              style={{ marginBottom: "10px" }}
              label="Name"
              autoFocus={false}
              type="Name"
              name="Name"
              value="Sehrish Munir"
              variant="outlined"
              required={true}
            />
            <TextField
              style={{ marginBottom: "10px" }}
              label="Email"
              autoFocus={false}
              type="email"
              name="email"
              value="Sehrishmunir143@gmail.com"
              required={true}
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px" }}
              label="Current Position"
              autoFocus={false}
              type="type"
              value="React Developer"
              name="Current Position"
              required={true}
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px" }}
              label="Education"
              autoFocus={false}
              type="type"
              name="Education"
              value="Software Engineer"
              required={true}
              variant="outlined"
            />
            <TextField
              style={{ marginBottom: "10px" }}
              label="Country"
              autoFocus={false}
              type="type"
              value="Pakistan"
              name="Country"
              required={true}
              variant="outlined"
            />
            <TextField
              label="City"
              autoFocus={false}
              value="Islamabad"
              type="type"
              name="State"
              required={true}
              variant="outlined"
            />
            <CardActions
              className={classes.cardAction}
              onClick={() => setOpen(true)}
            >
              <BtnCustom title="Save Profile" type="submit" />
            </CardActions>
          </div>
          <div className={classes.right__profile}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
                borderBottom: "1px solid lightgray",
              }}
            >
              <Facebook className={classes.facebook} fontSize="large" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className={classes.heading}>Sehrish Munir</h4>
                <p className={classes.smallText}>Facebook Inc.</p>
                <p className={classes.smallText}>March,2017 - May 2020</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Twitter className={classes.twitter} fontSize="large" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className={classes.heading}>Sehrish Munir</h4>
                <p className={classes.smallText}>Twitter Inc.</p>
                <p className={classes.smallText}>March,2017 - May 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
