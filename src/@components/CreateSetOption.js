import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import { CreateOptionSet } from "src/@store/optionSet/Optionset.Actions";
import { v4 as uuidv4 } from "uuid";
import OptionSetPrice from "./OptionSetPrice";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CreateDishTag from "./DropDown";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    maxHeight: "90vh",
    margin: "0 auto",
    overflow: "auto",
  };
}
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "100%",
      maxWidth: "720px",
      borderRadius: "3px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: "none",
      display: "flex",
      flexDirection: "column",
      margin: "50px auto 150px auto ",
      zIndex: "9999",
    },
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
        background: "rgb(238, 82, 82)",
      },
      "&:focus": {
        outline: "none",
      },
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      marginTop: "10px",
    },
    cancelIcon: {
      cursor: "pointer",
      borderRadius: "20px",
      color: "white",
      backgroundColor: "black",
      padding: "5px",
      position: "relative",
      fontSize: "xx-large",
      zIndex: 1,
    },
    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    },
    button: {
      "&:focus": {
        outline: "none",
      },
    },
    divDay: {
      display: "inline-block",
      border: "1px solid rgb(214, 214, 214)",
      // width: "77% !important",
      height: "38px",
      padding: "0 10px",
      borderRadius: "9px !important",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      top: "2px",
      right: "-13px",
    },
    ButtonGroupClass: {
      position: "relative",
      left: "25px",
      top: "2px",
      width: "29%",
      height: "30px",
    },
    btnStyle: {
      "&:focus": {
        outline: "none",
      },
    },
  })
);
function CreateSetOption({ open }) {
  const history = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  let dta = {
    name: "",
    displayName: "",
    showInMenu: false,
    IPNFQP: false,
    options: [],
    required: false,
    selectMultiple: false,
    enableOptionQuantity: false,
    minOptionsRequired: "",
    maxOptionsRequired: "",
    freeQuantity: "",
  };

  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const [initial, setInitial] = useState("general");
  const [timeslot, addTimeSlot] = useState(false);
  let [items, setItems] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  let count = 1;
  const handleClick = (e) => {
    e.preventDefault();
    open(false);
    const { name } = form;
    form.options = items;

    if (name != "") {
      dispatch(CreateOptionSet(form, history));
    }
  };
  const handlefieldchange = (e) => {

    e.persist();
    handleChange(e);
  };
  const handletimechange = (e, id) => {
    var index = items.findIndex((x) => x.id === id);


    let g = items[index];
    if (e.target.type === "checkbox") {
      g[e.target.name] = e.target.checked;
    } else {
      g[e.target.name] = e.target.value;
    }
    if (index === -1) {
    } else setItems([...items.slice(0, index), g, ...items.slice(index + 1)]);
  };
  const addSlot = (e) => {
    e.preventDefault();
    addTimeSlot(true);
    setItems([
      ...items,
      {
        id: uuidv4(),
        name: "",
        price: "",
        inStock: "",
        noStock: false,
      },
    ]);
  };
  const deleteSlot = (id) => {
    setItems((previd) => {
      return previd.filter((item, index) => {
        return item.id != id;
      });
    });
  };


  const [selectValue, setSelectValue] = useState(1);
  const [stateNum, setStateNum] = useState(1);
  const onChangeSelct = (e) => {
    setSelectValue(e.target.value);
    if (e.target.value == 1) {
      setStateNum(1);
    }
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Create Option Set</Typography>
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <div className={classes.allbtn}>
        <Button
          style={{
            backgroundColor: initial === "general" ? "lightgray" : "white",
          }}
          className={classes.button}
          onClick={() => setInitial("general")}
        >
          General
        </Button>
        <Button
          variant="p"
          style={{
            backgroundColor: initial === "credential" ? "lightgray" : "white",
          }}
          className={classes.button}
          onClick={() => setInitial("credential")}
        >
          Options
        </Button>
        <Button
          variant="p"
          style={{
            backgroundColor: initial === "options" ? "lightgray" : "white",
          }}
          className={classes.button}
          onClick={() => setInitial("options")}
        >
          Conditions
        </Button>
        <Button
          variant="p"
          style={{
            backgroundColor: initial === "dishes" ? "lightgray" : "white",
          }}
          className={classes.button}
          onClick={() => setInitial("dishes")}
        >
          Add/Remove From Dishes
        </Button>
      </div>
      <form>
        {initial === "general" && (
          <>
            <OrderTime
              title="Name"
              inputname="name"
              des="A unique name for your option set"
              handlechange={handlefieldchange}
              req={true}
            />
            <OrderTime
              button
              btnname="optional"
              inputname="displayName"
              title="Display Name"
              des="Will override the unique name in your store"
              handlechange={handlefieldchange}
            />
            <OrderTime
              button
              checked
              btnname="optional"
              inputname="showInMenu"
              title="Show In Menu"
              des="If enabled, the option set will display itself your on your menu list. If disabled, it will only show in the dish popup"
              handlechange={handlefieldchange}
            />

            <OrderTime
              button
              checked
              btnname="IPNFQP"
              inputname="description"
              title="Inc. Price in Free Quantity Promos"
              des="By default, option set prices are not counted towards promos such as buy 1 get 1 free. For example, if the base dish price is $10 but the customer added an option costing $5 extra, total $15, if they buy 2 units, the second will be discounted for the base cost of $10. If this setting is enabled, the discount would be valid for up to $15"
              handlechange={handlefieldchange}
            />
          </>
        )}
        {initial == "credential" && (
          <>
          

            <Button variant="outlined" color="secondary" onClick={addSlot}>
              Add Options
            </Button>
            <select
              style={{ width: selectValue == 2 ? "51% " : "77%" }}
              className={classes.divDay}
              onChange={onChangeSelct}
            >
              <option value="1">No Variable Price</option>
              <option value="2">Pizza Menu - Base Choice</option>
            </select>
            {selectValue == 2 ? (
              <>
                <ButtonGroup
                  variant="contained"
                  // color="secondary"
                  aria-label="contained primary button group"
                  className={classes.ButtonGroupClass}
                >
                  <Button
                    style={{
                      backgroundColor: stateNum == 1 ? "rgb(238,82,82)" : "",
                      color: stateNum == 1 ? "white" : "black",
                    }}
                    className={classes.btnStyle}
                    onClick={() => {
                      setStateNum(1);
                    }}
                  >
                    Regular($)
                  </Button>
                  <Button
                    style={{
                      backgroundColor:
                        stateNum == 2 ? "rgb(238,82,82)" : "lightgrey",
                      color: stateNum == 2 ? "white" : "black",
                    }}
                    className={classes.btnStyle}
                    onClick={() => {
                      setStateNum(2);
                    }}
                  >
                    Variable($)
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              ""
            )}

            <OptionSetPrice
              values={
                stateNum === 1
                  ? ["Name", "Price($)", "#in Stock", "No-Stock"]
                  : [
                      "Name",
                      "Classic($)",
                      "Thin($)",
                      "Crust($)",
                      "#inStock",
                      "No-Stock",
                    ]
              }
              selectValue={selectValue}
              stateNum={stateNum}
            />
            <>
              {items.map((item) => {
                return (
                  item.id && (
                    <OptionSetPrice
                      key={item.id}
                      id={item.id}
                      // checked={item.setInput}
                      Name={item.name}
                      InStock={item.inStock}
                      Price={item.price}
                      NoStock={item.noStock}
                      onAdd={addSlot}
                      onDelete={deleteSlot}
                      count={count++}
                      stateNum={stateNum}
                      selectValue={selectValue}
                      inputname="options"
                      handlechange={handletimechange}
                    />
                  )
                );
              })}
            </>
          </>
        )}

        {initial == "options" && (
          <>
            <OrderTime
              checked
              inputname="required"
              title="Required"
              des="If enabled, a customer must make a choice from this option set"
              handlechange={handlefieldchange}
            />
            <OrderTime
              checked
              inputname="selectMultiple"
              title="Select Multiple"
              des="If enabled, a customer can select multiple options"
              handlechange={handlefieldchange}
            />
            <OrderTime
              checked
              inputname="enableOptionQuantity"
              title="Enable Option Quantity"
              des="If enabled, customers can select the quantity of a particular option"
              handlechange={handlefieldchange}
            />
            <OrderTime
              button
              btnname="optional"
              inputname="minOptionsRequired"
              title="Min Options Required"
              des="The minimum number of options that must be selected. Minimum is 1"
              type="number"
              handlechange={handlefieldchange}
              minimum={1}
            />
            <OrderTime
              button
              btnname="optional"
              inputname="maxOptionsRequired"
              title="Max Options Allowed"
              des="The maximum number of options that can be selected. Leave empty for no limit"
              type="number"
              handlechange={handlefieldchange}
              minimum={1}
            />
            <OrderTime
              button
              btnname="optional"
              inputname="freeQuantity"
              title="Free Quantity"
              des="The number of options that can be selected for free. NOTE: If enabled, ensure all your options are the same price otherwise the free options will be credited top to bottom"
              type="number"
              handlechange={handlefieldchange}
              minimum={1}
            />
          </>
        )}
        {initial == "dishes" && (
          <>
            <CreateDishTag />
          </>
        )}

        <Button className={classes.btn} onClick={handleClick} type="submit">
          Save
        </Button>
      </form>
    </div>
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ overflowY: "auto" }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default CreateSetOption;
