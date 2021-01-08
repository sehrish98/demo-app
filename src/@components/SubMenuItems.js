import React, { useState } from "react";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CreateMenu from "./CreateMenu";

import OutlineButton from "./OutlineButton";
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
      margin: "15px 0px 00px 15px",
    },
  })
);
function SubMenuItems({ items }) {
  console.log("jghklm:", items);
  const [opencreate, setOpencreate] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Paper>
        {
          <div className={classes.detail}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBoxOutlineBlankIcon fontSize="medium" />
              <Typography variant="p" style={{ fontWeight: "500" }}>
                Pizzano
              </Typography>
            </div>
            <Typography variant="p">hi</Typography>
          </div>
        }
        {opencreate && <CreateMenu open={setOpencreate} />}
      </Paper>
      <OutlineButton name="Create New Menu" open={setOpencreate} width="99%" />
    </div>
  );
}

export default SubMenuItems;
