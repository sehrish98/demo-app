import { makeStyles } from "@material-ui/core";
import React, { useRef, useState, useEffect } from "react";

import DragHandleIcon from "@material-ui/icons/DragHandle";

import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  divSize: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "31px ",
    height: "38px",
    padding: "0 10px",
    marginTop: "7px",
    cursor: "move",
    borderRadius: "0 ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:focus": {
      outline: "none",
    },
  },
  divSize1: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "31px ",
    height: "38px",
    padding: "0 10px",
    cursor: "move",
    borderRadius: "0 ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-38px",
    left: "31px",
    "&:focus": {
      outline: "none",
    },
  },
  divDay: {
    display: "inline-block",
    border: "1px solid rgb(214, 214, 214)",
    width: "157px ",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 ",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-76px",
    right: "-62px",
    "&:focus": {
      outline: "none",
    },
  },
  divDay1: {
    display: "inline-block",
    border: "1px solid rgb(214, 214, 214)",
    width: "74px ",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 ",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: "-82px",
    right: "-61px",
    "&:focus": {
      outline: "none",
    },
  },
  inputCheck: {
    position: "relative",
    top: "7px",
    left: "1px",
    width: "36px",
    "&:focus": {
      outline: "none",
    },
  },
  checkBox: {
    display: "inline",
    position: "relative",
    bottom: "83px",
    left: "460px",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px ",
    height: "38px",
    padding: "0 10px",
    marginTop: "7px",
    borderRadius: "0 ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:focus": {
      outline: "none",
    },
  },
  butttons: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px ",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "121px",
    left: "498px",
    "&:focus": {
      outline: "none",
    },
  },
  buttonDelete: {
    display: "inline",
    color: "gray",
    border: "1px solid rgb(214, 214, 214)",
    width: "40px ",
    height: "38px",
    padding: "0 10px",
    borderRadius: "0 ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: "120px",
    left: "605px",
    "&:focus": {
      outline: "none",
    },
  },
  inputClass: {
    "&:focus": {
      outline: "none",
    },
  },
});

export default function OptionSetPrice(props) {
  const classes = useStyles();
  const [input, setInput] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInstock] = useState("");
  function feildChangename(e) {
    setName(e.target.value);
  }
  function feildChangePrice(e) {
    setPrice(e.target.value);
  }
  function feildChangeStock(e) {
    setInstock(e.target.value);
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  function handleChange() {
    setInput(!input);
  }
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <>
      {props.stateNum === 1 && (
        <div
          id={props.id}
          style={{
            height: "31px",
            marginTop: props.count === 1 ? "19px" : "0",
          }}
          ref={ref}
          name={props.inputname}
        >
          <div
            className={classes.divSize}
            style={{ position: "relative", top: props.values ? "13px" : "" }}
          >
            {props.values ? null : <i class="fas fa-arrow-up"></i>}
          </div>
          <div
            className={classes.divSize1}
            style={{ position: "relative", top: props.values ? "-25px" : "" }}
          >
            {props.values ? null : <i class="fas fa-arrow-down"></i>}
          </div>
          <input
            type="text"
            name="name"
            className={classes.divDay}
            onChange={(e) => {
              props.handlechange(e, props.id);
            }}
            // value={props.count}
            placeholder="name"
            value={props.values ? props.values[0] : props.Name}
          />
          <input
            type={props.values ? "text" : "number"}
            name="price"
            className={classes.divDay}
            placeholder="$"
            value={props.values ? props.values[1] : props.Price}
            onChange={(e) => {
              props.handlechange(e, props.id);
            }}
          />
          <input
            type={props.values ? "text" : "number"}
            name="inStock"
            className={classes.divDay}
            disabled={!props.NoStock || props.values ? "" : "disabled"}
            value={props.values ? props.values[2] : props.InStock}
            onChange={(e) => {
              props.handlechange(e, props.id);
            }}
          />
          <div
            className={classes.divDay1}
            style={{ position: "relative", top: props.values ? "-63px" : "" }}
          >
            {props.values ? (
              ""
            ) : (
              <input
                name="noStock"
                type="checkbox"
                className={classes.inputCheck}
                onChange={(e) => {
                  props.handlechange(e, props.id);
                }}
                value={props.values ? props.values[3] : props.NoStock}
              />
            )}
          </div>
          <div
            className={classes.buttonDelete}
            onClick={handleClick}
            style={{
              position: "relative",
              bottom: props.values ? "114px" : "",
            }}
          >
            {props.values ? null : <i class="fas fa-minus-circle"></i>}
          </div>
        </div>
      )}

      {props.stateNum === 2 && (
        <div
          id={props.id}
          style={{
            height: "31px",
            marginTop: props.count === 1 ? "19px" : "0",
          }}
          ref={ref}
        >
          <div
            className={classes.divSize}
            style={{ position: "relative", top: props.values ? "13px" : "" }}
          >
            {props.values ? null : <i class="fas fa-arrow-up"></i>}
          </div>
          <div
            className={classes.divSize1}
            style={{ position: "relative", top: props.values ? "-25px" : "" }}
          >
            {props.values ? null : <i class="fas fa-arrow-down"></i>}
          </div>

          <input
            type="text"
            className={classes.divDay}
            value={props.count}
            placeholder="name"
            value={props.values ? props.values[0] : null}
            style={{ width: "99px " }}
          />
          <input
            type={props.values ? "text" : "number"}
            className={classes.divDay}
            value={props.count}
            placeholder="$"
            value={props.values ? props.values[1] : null}
            style={{ width: "99px" }}
          />
          <input
            type={props.values ? "text" : "number"}
            className={classes.divDay}
            value={props.count}
            placeholder="$"
            value={props.values ? props.values[2] : null}
            style={{ width: "99px" }}
          />
          <input
            type={props.values ? "text" : "number"}
            className={classes.divDay}
            value={props.count}
            placeholder="$"
            value={props.values ? props.values[3] : null}
            style={{ width: "99px" }}
          />
          <input
            type={props.values ? "text" : "number"}
            className={classes.divDay}
            value={props.count}
            placeholder="$"
            value={props.values ? props.values[4] : null}
            style={{ width: "99px" }}
          />

          {props.values ? (
            <div
              className={classes.divDay1}
              style={{ position: "relative", top: props.values ? "-63px" : "" }}
            ></div>
          ) : (
            <div
              className={classes.divDay1}
              style={{ position: "relative", top: props.values ? "-63px" : "" }}
            >
              <input
                type="checkbox"
                className={classes.inputCheck}
                onClick={handleChange}
                value={props.values ? props.values[3] : null}
              />
            </div>
          )}

          <div
            className={classes.buttonDelete}
            onClick={handleClick}
            style={{
              position: "relative",
              bottom: props.values ? "114px" : "",
              left: "629px",
            }}
          >
            {props.values ? null : <i class="fas fa-minus-circle"></i>}
          </div>
        </div>
      )}
    </>
  );
}
