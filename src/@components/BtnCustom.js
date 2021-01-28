import React from 'react'
import { createStyles,makeStyles } from "@material-ui/core/styles";
import {
    Button,
  } from "@material-ui/core";
  const useStyles = makeStyles((theme) =>
    createStyles({
      btn: {
        width: "100%",
        backgroundColor: "rgb(238, 82, 82)",
        border: 0,
        color: "white",
        height: 35,
        margin: "3px",
        display: "flex",
        padding: "5px 10px",
        cursor: "pointer",
        marginTop: "30px",
        "&:hover": {
            backgroundColor: "rgb(238, 82, 82)",
        },
      },
    })
  );
function BtnCustom({title , open}) {
    const handleClose = () => {
      if(title=="Log in")
      {
      }
      else{
        open(false);
      }
      };
    const classes = useStyles();
    return (
        <Button className={classes.btn} onClick={handleClose} >
        {title}
      </Button>
    )
}

export default BtnCustom
