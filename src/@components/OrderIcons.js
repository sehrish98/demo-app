import React from "react";
import { Tooltip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      margin: "15px 2px 0px 2px",
      borderRadius: "5px",
      fontSize: "6px",
      cursor: "pointer",
      alignItems: "center",
      placeItems: "center",
      alignSelf: "center",
      color: "rgb(238, 82, 82)",
      border: "1px solid rgb(238, 82, 82)",
      "&:hover": {
        background: "rgb(238, 82, 82)",
        color: "white",
      },
    },
    active: {
      background: "rgb(238, 82, 82)",
      color: "white",
    },
  })
);
const OrderIcon = ({ icon, tiptext, i,handlechange }) => {
  const classes = useStyles();
  return (
    <div>
      <Tooltip title={tiptext} placement="top" className={classes.icon} arrow>
        <p
          className={`${i === "0" && classes.active}`}
          onClick={handlechange}
          style={{ fontSize: "1rem" }}
        >
          {icon}
        </p>
      </Tooltip>
    </div>
  );
};
export default OrderIcon;
