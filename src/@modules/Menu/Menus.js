import React, { useState, useEffect } from "react";
import { Typography, Tooltip } from "@material-ui/core";
import {
  Help,
  Edit,
  Delete,
  ChevronRight,
  ExpandMore,
  FileCopy,
} from "@material-ui/icons";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { GetMenuItems } from "../../@store/menu/Menu.Actions";
import CustomButton from "../../@components/CustomButton";
import CreateSetOption from "../../@components/CreateSetOption";
import CreateDishTag from "../../@components/CreateDishTag";
import OutlineButton from "../../@components/OutlineButton";
import CreateMenu from "../../@components/CreateMenu";
import DeleteForm from "../../@components/DeleteForm";
import EditMenu from "../../@components/EditMenu";
import EditDishTag from "../../@components/EditDishTag";
import EditSetOption from "../../@components/EditSetOption";
import MenuItems from "../../@components/MenuItems";
import {
  GetOptionSet,
  OptionSetDrag,
  DeleteOptionSet,
} from "../../@store/optionSet/Optionset.Actions";

import {
  GetDishes,
  DisheTagDrag,
  DisheTagDelete,
} from "../../@store/dish/Dish.Actions";
import { MenuItemsDrag, MenuItemsDelete } from "../../@store/menu/Menu.Actions";
import { act } from "@testing-library/react";

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
      width: "93%",
      margin: "20px 80px 10px 50px",
    },
    help__Icon: {
      backgroundColor: "white",
      border: "1px solid rgb(214, 214, 214)",
      borderRadius: "3px",
      cursor: "pointer",
      padding: "3px",
    },
    allbtn: {
      display: "flex",
      alignSelf: "center",
      margin: "40px 10px 40px 0px",
    },
    show: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      cursor: "pointer",
    },
    icon__style: {
      margin: "5px",
      cursor: "pointer",
      color: "gray",
    },
    sub__detail: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      backgroundColor: "white",
      margin: "5px 10px 10px 5px",
      alignItems: "center",
    },
  })
);

function Menus({ title, value }) {
  const history = useHistory();
  const menuList = useSelector(({ menu__reducer }) => menu__reducer.menu);
  const optionsetList = useSelector(
    ({ optionset__Reducer }) => optionset__Reducer.optionset
  );
  const dishList = useSelector(({ dish__Reducer }) => dish__Reducer.dishes);
  const clientid = localStorage.getItem("clientId");
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(GetMenuItems());
    dispatch(GetDishes());
    dispatch(GetOptionSet());
    // setArrays(menuList);
  }, [dispatch]);
  const classes = useStyles();
  const [editmenu, setEditMenu] = useState(false);
  const [active, setactive] = useState("menuList");
  const [opencreate, setOpencreate] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [editoptionset, setEditoptionset] = useState();
  const [optionsetcreate, setOptionsetcreate] = useState(false);
  const [optionsetdelete, setoptionsetDelete] = useState(false);
  const [editDishtag, setEditDishtag] = useState();
  const [Dishtagcreate, setDishtagcreate] = useState(false);
  const [Dishtagdelete, setDishtagDelete] = useState(false);

  const [arrays, setArrays] = useState();
  const [arrange, setArrange] = useState(false);
  const [currentIndex, setcurrentIndex] = useState();
  const [show, setShow] = useState(false);
  const [dstop, setDstop] = useState(true);
  const [iid, setid] = useState();
  useEffect(() => {
    if (active === "menuList") {
      setArrays(menuList);
    }
    if (active === "dishList") {
      setArrays(dishList);
    }
    if (active === "optionsetList") {
      setArrays(optionsetList);
    }
  }, [menuList, dishList, optionsetList]);

  const reorder = (arrays, source, destination) => {
    const newArray = Array.from(arrays);
    const [removed] = newArray.splice(source, 1);
    newArray.splice(destination, 0, removed);

    return newArray;
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    } else if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    } else {
      let sortOrder = {
        from: source.index + 1,
        to: destination.index + 1,
        id: draggableId,
      };

      if (active === "menuList") {
        dispatch(MenuItemsDrag(sortOrder));
      } else if (active === "optionsetList") {
        const resultt = dispatch(OptionSetDrag(sortOrder));
      } else if (active === "dishList") {
        const resultt = dispatch(DisheTagDrag(sortOrder));
      } else {
        console.log("Dsds");
      }
    }
  };
  const handleclick = (index) => {
    setShow(!show);
    setcurrentIndex(index);
  };
  const handleactivechange = (e) => {
    if (e === "menuList") {
      setactive(e);
      setArrays(menuList);
    }
    if (e === "optionsetList") {
      setactive(e);
      setArrays(optionsetList);
      setShow(false);
    }
    if (e === "dishList") {
      setactive(e);
      setArrays(dishList);
      setShow(false);
    }
  };

  const handledelete = (e) => {
    if (e == "Menu") {
      const obj = { menuId: iid };
      dispatch(MenuItemsDelete(obj, history));
    } else if (e == "Dish_Tags") {
      const obj = { _id: iid };
      dispatch(DisheTagDelete(obj, history));
    } else if (e == "Option_Set") {
      const obj = { _id: iid };
      dispatch(DeleteOptionSet(obj, history));
    }
  };
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
          Menu
        </Typography>
        <Help fontSize="medium" className={classes.help__Icon} />
      </div>
      <div className={classes.allbtn}>
        <CustomButton
          name="Menus"
          activ={active == "menuList" ? true : ""}
          handlechange={() => {
            handleactivechange("menuList");
          }}
        />
        <CustomButton
          name="Option Set"
          state={setArrays}
          array={optionsetList}
          activ={active == "optionsetList" ? true : ""}
          handlechange={() => {
            handleactivechange("optionsetList");
          }}
        />
        <CustomButton
          name="Dish Tags"
          state={setArrays}
          array={dishList}
          activ={active == "dishList" ? true : ""}
          handlechange={() => {
            handleactivechange("dishList");
          }}
        />
      </div>

      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppableId">
            {(provided) => (
              <div ref={provided.innerRef} style={{}}>
                {arrays
                  ?.sort((a, b) => {
                    
                    return a.position - b.position;
                  })
                  .map((c, index) => (
                    <Draggable
                      draggableId={c._id}
                      index={index}
                      key={c._id}
                      isDragDisabled={dstop}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div className={classes.sub__detail}>
                              {arrays == menuList ? (
                                <div className={classes.show}>
                                  {show && index == currentIndex ? (
                                    <ExpandMore
                                      onClick={() => handleclick(index)}
                                    />
                                  ) : (
                                    <ChevronRight
                                      onClick={() => handleclick(index)}
                                    />
                                  )}

                                  <Typography variant="p">{c.name}</Typography>
                                </div>
                              ) : (
                                <div className={classes.show}>
                                  <Typography variant="p">{c.name}</Typography>
                                </div>
                              )}
                              <div>
                                <Tooltip title="Edit" placement="top">
                                  <Edit
                                    fontSize="small"
                                    onClick={() =>
                                      arrays == menuList
                                        ? (setEditMenu(true), setid(c))
                                        : arrays == dishList
                                        ? (setEditDishtag(true), setid(c))
                                        : arrays == optionsetList
                                        ? (setEditoptionset(true), setid(c))
                                        : ""
                                    }
                                    className={classes.icon__style}
                                  />
                                </Tooltip>
                                <Tooltip title="Delete" placement="top">
                                  <Delete
                                    fontSize="small"
                                    onClick={() =>
                                      arrays == menuList
                                        ? (setopenDelete(true), setid(c._id))
                                        : arrays == dishList
                                        ? (setDishtagDelete(true), setid(c._id))
                                        : arrays == optionsetList
                                        ? (setoptionsetDelete(true),
                                          setid(c._id))
                                        : ""
                                    }
                                    className={classes.icon__style}
                                  />
                                </Tooltip>
                                <Tooltip title="Copy" placement="top">
                                  <FileCopy
                                    onClick={() => setOpencreate(true)}
                                    fontSize="small"
                                    className={classes.icon__style}
                                  />
                                </Tooltip>
                              </div>
                            </div>
                            {show && index == currentIndex && (
                              <div>
                                <MenuItems
                                  items={c.subCategory}
                                  id={c._id}
                                  dishes={c.item}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {arrange ? (
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            <OutlineButton name="Save" width="50%" title="save" />
            <OutlineButton
              name="Cancel"
              open={setArrange}
              width="50%"
              title="save"
            />
          </div>
          <Typography
            variant="p"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            Click + hold to drag and drop items to re-order them
          </Typography>
        </div>
      ) : (
        <div>
          {arrays == menuList ? (
            <OutlineButton
              name="Create New Menu"
              open={setOpencreate}
              width="100%"
            />
          ) : arrays == dishList ? (
            <OutlineButton
              name="Create New dish list"
              open={setDishtagcreate}
              width="100%"
            />
          ) : arrays == optionsetList ? (
            <OutlineButton
              name="Create New option set"
              open={setOptionsetcreate}
              width="100%"
            />
          ) : (
            <OutlineButton
              name="Create New Menu"
              open={setOpencreate}
              width="100%"
            />
          )}
          <OutlineButton
            name="Re-arrange"
            open={setArrange}
            width="100%"
            show={setDstop}
          />
        </div>
      )}
      <div>
        {opencreate && <CreateMenu open={setOpencreate} />}
        {editmenu && <EditMenu open={setEditMenu} data={iid} />}
        {opendelete && (
          <DeleteForm
            open={setopenDelete}
            title="Menu"
            handledelete={() => {
              handledelete("Menu");
            }}
          />
        )}
        {Dishtagdelete && (
          <DeleteForm
            open={setDishtagDelete}
            title="Dish Tags"
            handledelete={() => {
              handledelete("Dish_Tags");
            }}
          />
        )}
        {optionsetdelete && (
          <DeleteForm
            open={setoptionsetDelete}
            title="Option Set"
            handledelete={() => {
              handledelete("Option_Set");
            }}
          />
        )}
        {optionsetcreate && <CreateSetOption open={setOptionsetcreate} />}
        {Dishtagcreate && <CreateDishTag open={setDishtagcreate} />}
        {editoptionset && <EditSetOption open={setEditoptionset} data={iid} />}
        {editDishtag && <EditDishTag open={setEditDishtag} data={iid} />}
      </div>
    </div>
  );
}

export default Menus;
