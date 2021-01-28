import React from "react";
import { Tooltip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
const OrderIcon = ({ icon, tiptext, open,name,state, i }) => {
  // const history = useHistory();
  const classes = useStyles();
  const handleclick = () => {
    if(name=="compress")
    {
      if(state>=60)
      {
        open(state-20)
      }
    }
    else if(name=="expand")
    {
      if(state<90)
      {
        open(state+20)
      }
    }
    else if(name=="un_confirm")
    {
      open(!state)
    }
    else
    {
      open(true);
    }
  };
  return (
    <div>
      <Tooltip title={tiptext} placement="top" className={classes.icon} arrow>
        <p
          className={`${i === "0" && classes.active}`}
          onClick={handleclick}
          style={{ fontSize: "1rem" }}
        >
          {icon}
        </p>
      </Tooltip>
    </div>
  );
};
export default OrderIcon;
