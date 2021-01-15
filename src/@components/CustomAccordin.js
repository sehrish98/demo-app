import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "100%",
      marginTop: "20px",
      marginBottom: "60px",
      //   padding: "20px 30px",
    },
  })
);

function CustomAccordin({ title, open, color }) {
  const classes = useStyles();
  return (
    <div>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            backgroundColor: `{${color}?${color}:"lightgray"}`,
            borderBottom: "1px solid rgb(230, 230, 230)",
            borderTop: "1px solid rgb(230, 230, 230)",
          }}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {open}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomAccordin;
