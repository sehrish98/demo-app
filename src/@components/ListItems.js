import React from "react";
import { Tooltip} from "@material-ui/core";
import { createStyles,  makeStyles } from "@material-ui/core/styles";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
        backgroundColor:"lightgray",
        padding:"10px 8px 8px 10px",
        margin:"15px 10px 10px 10px",
        borderRadius:"5px",
        fontSize:"12px",
        cursor:"pointer",
        alignItems:"center",
        placeItems:"center",
        alignSelf:"center",
        "&:hover": {
            background: "rgb(238, 82, 82)",
            color:"white"
          },
    },
    active:{
        background: "rgb(238, 82, 82)",
        color:"white"
    }
  })
);
const ListItems = ({ icon, tiptext, i , route}) => {
  console.log("hbhgv" , i)
  // const history=useHistory()
  const classes = useStyles();
  const handleclick=()=>{
    // history.push(`${route}`)
  }
  return (
    <div>
      <Tooltip title={tiptext} placement="right" className={classes.icon}>
          <p className={`${i =="0"&& classes.active}`} onClick={handleclick}>{icon}</p>
      </Tooltip>
    </div>
  );
};
export default ListItems;
