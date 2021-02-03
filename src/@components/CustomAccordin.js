import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "100%",
      marginTop: "20px",
      marginBottom: "60px",
    },
    detail: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
          <div className={classes.detail}>{open}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CustomAccordin;
