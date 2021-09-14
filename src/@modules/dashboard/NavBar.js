import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import AddtoCart from "../../@components/AddtoCart";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    detail: {
      alignSelf: "center",
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: "1300px",
      padding: "0px 40px",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        padding: "0px 10px",
      },
    },
    paper: {
      width: "100%",
      padding: "10px 20px",
      height: "80px",
      backgroundColor: "white",
      [theme.breakpoints.down('sm')]: {
        padding:"5px 5px 0px 5px"
      },
    },
    btn: {
      padding: "8px 10px",
      backgroundColor: "#d43538",
      fontWeight: "700",
      color: "white",
      cursor: "pointer",
    },
  })
);
function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [cart, setAddtocart] = useState(false);
  const [setbookTable] = useState(false);
  const cart_items = useSelector(({ cartreducer }) => cartreducer.cart);
  
  const HandleClick =()=>{
    history.push("/")
  }
  return (
    <div elevation={5} className={classes.paper}>
      <div className={classes.detail} style={{ paddingBottom: "10px" }}>
        <div>
          <Typography variant="h6" style={{ fontWeight: "700" , cursor:"pointer" }} onClick={HandleClick}>
            Demo
          </Typography>
        </div>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <Typography
            variant="p"
            className={classes.btn}
            style={{
              borderTopLeftRadius: "3px",
              borderBottomLeftRadius: "3px",
            }}
            onClick={() => setAddtocart(true)}
          >
            Items {cart_items.length}
          </Typography>
          <Typography
            variant="p"
            className={classes.btn}
            style={{
              borderTopRightRadius: "3px",
              borderBottomRightRadius: "3px",
              borderLeft: "1px solid #df676a",
            }}
            onClick={() => setbookTable(true)}
          >
            Cart
          </Typography>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px dashed #d9d9d9",
          backgroundColor: "white",
          width: "100%",
        }}
      >

      </div>
      {cart && <AddtoCart open={setAddtocart} />}
    </div>
  );
}

export default NavBar;
