import React, { useState } from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import ServiceModal from "./ServiceModal";

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
    },
    paper: {
      alignSelf: "center",
      width: "32%",
      cursor: "pointer",
      margin: "20px 1px 10px 1px",
      backgroundColor:"white",
    },
    image: {
      height: "120px",
      alignItems: "center",
      width: "150px",
      backgroundSize:"cover",
      backgroundPosition: 'center',
    },
    btn: {
      border: "0",
      padding: "8px 15px",
      backgroundColor: "f2f2f2",
      borderTopLeftRadius: "5px",
      fontWeight:"600",
      fontSize:"16px",
      color:"#323232"
    },
  })
);
function CustomCard({ id,name, des, type, image ,price,qty}) {
  const classes = useStyles();
  const [openservice, setService] = useState(false);
  return (
    <>
      <div
        elevation={1}
        className={classes.paper}
        onClick={() => setService(true)}
      >
        <div style={{ display: "flex" }}>
          {image && <img className={classes.image} src={image}></img>}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              padding: "25px 20px 10px 5px",
            }}
          >
            <Typography variant="p" style={{ fontSize: "16px" }}>
              {name}
            </Typography>
            <Typography
              variant="p"
              style={{
                fontWeight: "500",
                fontSize: "16px",
                fontStyle: "italic",
              }}
            >
              {type}
            </Typography>
            <Typography variant="p" style={{ fontSize: "16px" }}>
              {des}
            </Typography>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className={classes.btn}>PKR {price}</button>
        </div>
      </div>
      {openservice && <ServiceModal open={setService} qty={qty} id={id} des={des} name={name} image={image} type={type} price={price}/>}
    </>
  );
}

export default CustomCard;
