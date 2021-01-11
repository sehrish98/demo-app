import React, { useState } from "react";
import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ExpandMore, ChevronRight } from "@material-ui/icons";

import SubMenuItems from "./SubMenuItems";

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
      height: "40px",
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      alignItems: "center",
    },
    paper: {
      alignSelf: "center",
      width: "100%",
      margin: "10px 10px 10px 10px",
    },
  })
);
function MenuItems({ items }) {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState();
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      {items.map((m) => (
        <>
          <Paper>
            <div className={classes.detail}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {show ? (
                  <ExpandMore onClick={() => setShow(false)} />
                ) : (
                  <ChevronRight onClick={() => setShow(true)} />
                )}
                <Typography variant="p">
                  {m.title}
                </Typography>
              </div>
              <Typography variant="p">hi</Typography>
            </div>
          </Paper>
          {show && <SubMenuItems items={m.subItems} key={m.id} />}
        </>
      ))}
    </div>
  );
}

export default MenuItems;
