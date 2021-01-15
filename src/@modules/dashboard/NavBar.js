import React, { useState } from "react";
import { Typography, Backdrop, CircularProgress } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Search } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import CustomTabs from "../../@components/CustomTabs";
import SearchModal from "../../@components/SearchModal";
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
    },
    paper: {
      width: "100%",
      padding: "20px 20px",
      height: "120px",
      backgroundColor: "white",
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
  const [opensearch, setSearch] = useState(false);
  const [cart, setAddtocart] = useState(false);
  const cart_items = useSelector(({ cartreducer}) => cartreducer.cart);
  return (
    <div elevation={5} className={classes.paper}>
      <div className={classes.detail} style={{ paddingBottom: "10px" }}>
        <div>
          <Typography variant="h6" style={{ fontWeight: "700" }}>
            Papa Booms
          </Typography>
        </div>
        <div
          className={classes.btn}
          style={{ marginLeft: "auto", cursor: "pointer", borderRadius: "3px" }}
          onClick={() => setSearch(true)}
        >
          <Search fontSize="medium" />
        </div>
        <div style={{ display: "flex", marginLeft: "30px" }}>
          <Typography
            variant="p"
            className={classes.btn}
            style={{
              borderTopLeftRadius: "3px",
              borderBottomLeftRadius: "3px",
            }}
            onClick={()=>setAddtocart(true)}
          >
            Book
          </Typography>
          <Typography
            variant="p"
            className={classes.btn}
            style={{
              borderTopRightRadius: "3px",
              borderBottomRightRadius: "3px",
              borderLeft: "1px solid #df676a",
            }}
          >
            Order {cart_items.length}
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
        <div className={classes.detail}>
          <CustomTabs item1="All" item2="Combo Deals" item3="Sides" />
        </div>
      </div>
      {opensearch && <SearchModal open={setSearch} />}
      {cart && <AddtoCart open={setAddtocart} />}
    </div>
  );
}

export default NavBar;
