import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { AddtoCartstart } from "../@store/Cart/Cart.Actions";

import { MenuItemsDelete } from "../@store/menu/Menu.Actions";
import { MenuCategoryDelete } from "../@store/menu/MenuCategory.Actions";
import { MenuCategoryItemsDelete } from "../@store/menu/MenuCategoryItems.Actions";
import { DeleteOptionSet } from "../@store/optionSet/Optionset.Actions";
import { DisheTagDelete } from "../@store/dish/Dish.Actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      backgroundColor: "white",
      color: "black",
      height: 30,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      padding: "15px 20px",
      cursor: "pointer",
      outline: "0",
      fontSize: "14px",
      border: "1px solid rgb(224, 224, 224)",
      "&:hover": {
        background: "lightgray",
      },
    },
    paper: {
      width: "45%",
      display: "flex",
      justifyContent: "space-between",
      padding: "13px",
      alignItems: "center",
      margin: "10px",
    },
    active: {
      background: "rgb(238, 82, 82)",
      color: "white",
      border: "1px solid rgb(238, 82, 82)",
      height: 30,
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      fontSize: "14px",
      padding: "15px 20px",
      cursor: "pointer",
      outline: "0",
    },
  })
);
function CustomButton({
  name,
  activ,
  state,
  array,
  id,
  title,
  type,
  price,
  qty,
  open,
  deleteMenu,
}) {
  const dispatch = useDispatch();
  const handleClick = () => {
    // if (state)
    // {
    //   state(array);
    // }
    if (open && name == "Add to Card") {
      const obj = {
        id: id,
        name: title,
        type: type,
        price: price,
        qty: qty,
      };
      dispatch(AddtoCartstart(obj));
      open(false);
    } else if (title == "Menu" && id) {
      const obj = { menuId: id };
      dispatch(MenuItemsDelete(obj));
    } else if (title == "Menu Category" && id) {
      const obj = { menuCategoryId: id };
      dispatch(MenuCategoryDelete(obj));
    } else if (title == "Dish Tags" && id) {
      const obj = { _id: id };
      dispatch(DisheTagDelete(obj));
    } else if (title == "Option Set" && id) {
      const obj = { _id: id };
      dispatch(DeleteOptionSet(obj));
    } else if (title == "Dishes" && id) {
      const obj = { menuCategoryItemId: id };
      dispatch(MenuCategoryItemsDelete(obj));
    } else if (name == "Menus" && state) {
      state(array);
    } else if (name == "Option Set" && state) {
      state(array);
    } else if (name == "Dish Tags" && state) {
      state(array);
    } else {
    }
  };
  const classes = useStyles();
  return (
    <div>
      <button
        className={`${activ ? classes.active : classes.btn}`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}

export default CustomButton;
