import React, { useState } from "react";
import { Typography, Switch } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles((theme) =>
createStyles({
    typo: {
        fontWeight: "600",
        }
    
})
)


export default function Icons({onClick}) {
    const classes = useStyles();

    const clicked=(e)=>{
        console.log("adsv",e.target.className)
    }
  return (
    <>
      <br />
      <br />
      
      <Typography variant="p" className={classes.typo}>
        Select an Icon
      </Typography>
      <br />
      <br />
      <i
        class="fas fa-pepper-hot fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer",
         
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-hamburger fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-pizza-slice fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-cheese fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-egg fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-bacon fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-hotdog fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-bone fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-ice-cream fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-fish fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-cookie fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-candy-cane fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-carrot fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-utensils fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 11px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-cheese fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-drumstick-bite fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="far fa-lemon fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 4px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-shopping-basket fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-cookie-bite fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-wine-glass fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 19px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-glass-martini-alt fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 6px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-mug-hot fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 10px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-concierge-bell fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-glass-whiskey fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-wind fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-dice-five fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 10px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-fire fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 12px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-leaf fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 6px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-carrot fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 4px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-drum-steelpan fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px ",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-soap fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px ",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="far fa-lemon fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 12px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-ice-cream fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px ",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-capsules fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px ",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-cheese fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px ",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fab fa-delicious fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 10px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-glass-cheers fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 4px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fab fa-gulp fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 16px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-hanukiah fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 4px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-mortar-pestle fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-oil-can fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 0",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fab fa-raspberry-pi fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 14px",
          cursor:"pointer"
        }}
        onClick={onClick}
      ></i>
      <i
        class="fas fa-snowflake fa-2x"
        style={{
          margin: "0",
          border: "1px solid rgb(214, 214, 214)",
          padding: "8px 10px",
          cursor:"pointer",
          
        }}
        onClick={onClick}
      ></i>
    
    </>
  );
}
