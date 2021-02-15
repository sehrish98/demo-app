import React, { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Modal, Button, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import IngrediantSlot from "./IngrediantSlots";
import { MenuCategoryItemsCreate } from "../@store/menu/MenuCategoryItems.Actions";
import OrderTime from "./OrderTime";
import useForm from "./hooks/useForm";
import { v4 as uuidv4 } from "uuid";
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
    },
    detail: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px",
      marginTop: "10px",
    },

    allbtn: {
      margin: "10px 0px",
      borderTop: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      padding: "10px 0px",
    },
    label: {
      backgroundColor: "rgb(238, 82, 82)",
      color: "white",
      padding: "0.5rem",
      fontFamily: "sans-serif",
      borderRadius: "0.3rem",
      cursor: "pointer",
      marginTop: " 1rem",
      marginLeft: "1rem",
      "&:hover": {
        background: "rgb(224, 224, 224)",
      },
    },
    label1: {
      backgroundColor: "rgb(238, 82, 82)",
      color: "white",
      padding: "0.5rem",
      fontFamily: "sans-serif",
      borderRadius: "0.3rem",
      cursor: "pointer",
      marginLeft: "1rem",
    },
  })
);

function CreateDish({ open, menuId, menucat }) {
  const history = useHistory();
  const [modalStyle] = React.useState(getModalStyle);
  const { form, setForm, handleChange } = useForm(null);
  const [imageState, setImageState] = useState(false);
  let dta = {
    name: "",
    price: "",
    displayname: "",
    printName: "",
    description: "",
  };
  useEffect(() => {
    if (!form) {
      setForm(dta);
    }
  }, [form]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClose = () => {
    open(false);
  };
  const handleClick = () => {
    const { name, displayName, printName, price, description } = form;
    if (name != "" && price != "") {
      const obj = {
        menuId: menuId,
        menuCategoryId: menucat,
        name: name,
        price: price,
        displayname: displayName,
        printName: printName,
        description: description,
      };
      dispatch(MenuCategoryItemsCreate(obj, history));
    }
  };
  const handlefieldchange = (e) => {
    e.persist();
    handleChange(e);
  };
  const changeState = (e) => {
   
    setImageState(!imageState);
  };
  const [timeslot, addTimeSlot] = useState(false);
  let [items, setItems] = useState([]);
  let count = 1;
  function addSlot(e) {
    e.preventDefault();
    addTimeSlot(true);
    setItems([
      ...items,
      {
        id: uuidv4(),
        openTime: "09:00",
        closeTime: "11:00",
        setInput: true,
        days: 1,
      },
    ]);
  }
  function deleteSlot(id) {
    setItems((previd) => {
      return previd.filter((item, index) => {
        return item.id != id;
      });
    });
  }

  function copyItem(obj, id) {
    items.map((data) => {
      if (data.id === id) {
        Object.assign(data, obj);
      }
    });
    setItems((items) => {
      return [
        ...items,
        {
          id: uuidv4(),
          openTime: obj.openTime,
          closeTime: obj.closeTime,
          days: obj.days,
          setInput: obj.setInput,
        },
      ];
    });
  }
  const [initial, setInitial] = useState("general");
  const [comboState, setComboState] = useState(false);
  const comboButton = () => {
    setComboState(true);
  };
  const standardButton=()=>{
    setComboState(false)
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.detail}>
        <Typography variant="h5">Create Dish</Typography>
        <CloseIcon onClick={handleClose} className={classes.cancelIcon} />
      </div>
      <div className={classes.allbtn}>
        <Button
          style={{ backgroundColor: "lightgray" }}
          onClick={() => setInitial("general")}
        >
          General
        </Button>
        <Button variant="p" onClick={() => setInitial("credential")}>
          Image & Tags
        </Button>
        <Button variant="p" onClick={() => setInitial("options")}>
          Options & Igrediants
        </Button>
      </div>
      <form>
        <>
          {initial === "general" && (
            <>
              <OrderTime
                title="Dish type"
                inputname="name"
                des="A combo dishes allows customers to make several choices between selected standard dishes"
                handlechange={handlefieldchange}
                req={true}
                btngroup
                comboButton={comboButton}
                nam1="Standard"
                nam2="Combo"
                standardButton={standardButton}
              />
              <OrderTime
                title="Name"
                inputname="name"
                des="A unique name for your dish"
                handlechange={handlefieldchange}
                req={true}
              />
              <OrderTime
                title="Price"
                inputname="price"
                des="This cost of this item"
                handlechange={handlefieldchange}
                req={true}
                type="number"
              />
              {comboState && (
                <>
                  <OrderTime
                    title="Combo price type"
                    inputname="name"
                    des="Standard pricing means all the combo choices are set at same price. Difference pricing will take into account the price differences between the various dishes to increase the price if certain dishes are selected"
                    handlechange={handlefieldchange}
                    req={true}
                    btngroup
                    nam1="Standard"
                    nam2="Difference"

                  />
                </>
              )}
              <OrderTime
                button
                title="Display Name"
                inputname="name"
                des="Will override the unique name in your store"
                handlechange={handlefieldchange}
                req={true}
                btnname="optional"
              />
              <OrderTime
                button
                title="Print name"
                inputname="printName"
                des="A unique name for your menu"
                handlechange={handlefieldchange}
                btnname="optional"
              />

              <OrderTime
                button
                btnname="optional"
                inputname="description"
                title="Description"
                des="Will be displayed in your menu and dish popup"
                handlechange={handlefieldchange}
              />
              <OrderTime
                button
                btnname="optional"
                inputname="displayName"
                title="Subtitle"
                des="Will be displayed your dish name in bold font. Keep it short and sweet"
                handlechange={handlefieldchange}
              />
              <OrderTime
                button
                dropdown
                btnname="optional"
                inputname="displayName"
                title="Taxes"
                des="Select the taxes which should be applied to the dish"
                handlechange={handlefieldchange}
                options={["no item"]}
              />
            </>
          )}
          {initial == "credential" && (
            <>
              {!imageState && (
                <>
                  <input type="file" id="upload" hidden />
                  <label for="upload" className={classes.label}>
                    Choose file
                  </label>

                  <Button
                    variant="contained"
                    className={classes.label1}
                    onClick={changeState}
                  >
                    Custom Image
                  </Button>
                </>
              )}
              {imageState && (
                <>
                  <OrderTime
                    button
                    btnname="optional"
                    inputname="displayName"
                    title="Image"
                    des="File name can't contain special charaters. Only letters and numbers are allowed."
                    handlechange={handlefieldchange}
                    addbtn
                    changeState={changeState}
                    placeholder={"Image URL(including https://)"}
                  />
                </>
              )}

              <OrderTime
                dropdown
                inputname="displayName"
                title="Tags"
                des="Select tags to be shown with the dish."
                handlechange={handlefieldchange}
                options={["Tag 1", "Tag 2"]}
              />
            </>
          )}
          {initial == "options" && (
            <>
              <OrderTime
                dropdown
                inputname="displayName"
                title="Option Sets"
                des="Select option sets to be applied to the dish. Option sets are ordered according to how they are listed on the option set page, not by the order added here"
                handlechange={handlefieldchange}
                options={[
                  "Pizza Menu - Base Choice",
                  "Pizza Menu - Extra Toppings",
                ]}
                placeholder="Select from the dropdown or type to search"
              />
              <OrderTime
                dropdown
                inputname="displayName"
                title="Primary Option Set"
                des="Designate a primary option set which is 'required' and has 'multi-select' disabled. This will result in multiple prices showing on your dish card. For example, if you have 2 pizza sizes, regular and large ($5+), the dish will show your base dish price along with the price of the large option"
                handlechange={handlefieldchange}
                options={["No options Found"]}
                placeholder="Select from the dropdown or type to search"
              />
              <OrderTime
                btn
                values="Add Ingredient"
                btnname="optional"
                title="Add Ingredient"
                des="Define a list of ingredients for this dish that be can removed by the customer when ordering"
                onClick={addSlot}
              />
              <>
                {items.map((item) => {
                  return (
                    item.id && (
                      <IngrediantSlot
                        key={item.id}
                        id={item.id}
                        Open={item.openTime}
                        Close={item.closeTime}
                        checked={item.setInput}
                        Days={item.days}
                        onAdd={addSlot}
                        Copy={copyItem}
                        onDelete={deleteSlot}
                        count={count++}
                        placeholder="Name"
                      />
                    )
                  );
                })}
              </>
            </>
          )}
        </>
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

export default CreateDish;
