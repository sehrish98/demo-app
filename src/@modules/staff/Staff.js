import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";

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
      width: "100%",
      height: "80px",
      margin: "10px 0px 10px 0px",
    },
  })
);
function Staff() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div
        style={{ borderBottom: "1px solid lightgray" }}
        className={classes.detail}
      >
        <Typography
          variant="h1"
          style={{ fontWeight: "600", fontSize: "30px" }}
        >
          Staff
        </Typography>
        <HelpIcon
          fontSize="medium"
          style={{
            backgroundColor: "white",
            border: "1px solid rgb(214, 214, 214)",
            borderRadius: "3px",
            cursor: "pointer",
            padding: "3px",
          }}
        />
      </div>
    </div>
  );
}

export default Staff;
