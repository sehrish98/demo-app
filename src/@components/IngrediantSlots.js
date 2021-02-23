import { makeStyles } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";

import DragHandleIcon from "@material-ui/icons/DragHandle";

import FileCopyIcon from "@material-ui/icons/FileCopy";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  divSize: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px !important",
    height: "38px",
    padding: "0 10px",
    marginTop: "7px",
    cursor: "move",
    borderRadius: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divDay: {
    display: "inline-block",
    border: "1px solid rgb(214, 214, 214)",
    width: "111px !important",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 !important",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-38px",
    right: "-40px",
  },
  divDay1: {
    display: "inline-block",
    border: "1px solid rgb(214, 214, 214)",
    width: "67% !important",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 !important",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-38px",
    right: "-40px",
  },
  checkBox: {
    display: "inline",
    position: "relative",
    bottom: "83px",
    left: "460px",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px !important",
    height: "38px",
    padding: "0 10px",
    marginTop: "7px",
    borderRadius: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  butttons: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px !important",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "121px",
    left: "498px",
  },
  buttonDelete: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px !important",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "76px",
    left: "589px",
  },
});

export default function IngrediantSlot(props) {
  const classes = useStyles();
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  // Monitor changes to position state and update DOM
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div
      id={props.id}
      style={{ height: "31px" }}
      name={props.inputname}
      ref={ref}
    >
      <div
        className={classes.divSize}
        onMouseMove={onMouseMove}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        <DragHandleIcon />
      </div>

      <input
        type="number"
        className={classes.divDay}
        value={props.count}
      />
      <input
        type="text"
        name="name"
        className={classes.divDay1}
        value={props.Name}
        onChange={(e) => {
          props.handlechange(e, props.id);
        }}
        placeholder={props.placeholder}
      />
      <div className={classes.buttonDelete} onClick={handleClick}>
        <DeleteIcon />
      </div>
    </div>
  );
}
