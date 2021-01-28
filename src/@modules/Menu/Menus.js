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
import { GetOptionSet } from "../../@store/optionSet/Optionset.Actions";
import { GetDishes } from "../../@store/dish/Dish.Actions";

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
  })
);

function Menus({ title, value }) {
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
    setArrays(menuList);
  }, []);
  const classes = useStyles();
  const [editmenu, setEditMenu] = useState(false);
  const [opencreate, setOpencreate] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [editoptionset, setEditoptionset] = useState();
  const [optionsetcreate, setOptionsetcreate] = useState(false);
  const [optionsetdelete, setoptionsetDelete] = useState(false);

  const [editDishtag, setEditDishtag] = useState();
  const [Dishtagcreate, setDishtagcreate] = useState(false);
  const [Dishtagdelete, setDishtagDelete] = useState(false);

  const [arrays, setArrays] = useState([menuList]);
  const [arrange, setArrange] = useState(false);
  const [currentIndex, setcurrentIndex] = useState();
  const [show, setShow] = useState(false);
  const [dstop, setDstop] = useState(true);
  const [iid, setid] = useState();
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    const newArray = Array.from(arrays);
    const [removed] = newArray.splice(source.index, 1);
    newArray.splice(destination.index, 0, removed);
    setArrays(newArray);
  };
  // const handleArrange = () => {
  //   setArrange(true);
  // };
  const handleclick = (index) => {
    setShow(!show);
    setcurrentIndex(index);
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
        <Help
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
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          margin: "40px 10px 40px 0px",
        }}
      >
        <CustomButton
          name="Menus"
          state={setArrays}
          array={menuList}
          activ={arrays == menuList ? true : ""}
        />
        <CustomButton
          name="Option Set"
          state={setArrays}
          array={optionsetList}
          activ={arrays == optionsetList ? true : ""}
        />
        <CustomButton
          name="Dish Tags"
          state={setArrays}
          array={dishList}
          activ={arrays == dishList ? true : ""}
        />
      </div>
      <div style={{}}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{}}
              >
                {arrays?.map((c, index) => (
                  <Draggable
                    draggableId={c._id}
                    index={index}
                    isDragDisabled={dstop}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                              backgroundColor: "white",
                              margin: "5px 10px 10px 5px",
                              alignItems: "center",
                            }}
                          >
                            {arrays == menuList ? (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px 15px",
                                  cursor: "pointer",
                                }}
                              >
                                {show && index == currentIndex ? (
                                  <ExpandMore
                                    onClick={() => handleclick(index)}
                                  />
                                ) : (
                                  <ChevronRight
                                    onClick={() => handleclick(index)}
                                  />
                                )}

                                <Typography variant="p">
                                  {c.displayName}
                                </Typography>
                              </div>
                            ) : (
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  padding: "10px 15px",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="p">{c.name}</Typography>
                              </div>
                            )}
                            <div>
                              <Tooltip title="Edit" placement="Top">
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
                                  style={{
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: "gray",
                                  }}
                                />
                              </Tooltip>
                              <Tooltip title="Delete" placement="Top">
                                <Delete
                                  fontSize="small"
                                  onClick={() =>
                                    arrays == menuList
                                      ? (setopenDelete(true), setid(c._id))
                                      : arrays == dishList
                                      ? (setDishtagDelete(true), setid(c._id))
                                      : arrays == optionsetList
                                      ? (setoptionsetDelete(true), setid(c._id))
                                      : ""
                                  }
                                  style={{
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: "gray",
                                  }}
                                />
                              </Tooltip>
                              <Tooltip title="Copy" placement="Top">
                                <FileCopy
                                  onClick={() => setOpencreate(true)}
                                  fontSize="small"
                                  style={{
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: "gray",
                                  }}
                                />
                              </Tooltip>
                            </div>
                          </div>
                          {show && index == currentIndex && (
                            <div>
                              
                              <MenuItems items={c.subCategory} id={c._id} dishes={c.item}/>
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
        {editmenu && <EditMenu open={setEditMenu} data={iid}/>}
        {opendelete && (
          <DeleteForm open={setopenDelete} title="Menu" id={iid} />
        )}
        {Dishtagdelete && (
          <DeleteForm open={setDishtagDelete} title="Dish Tags" id={iid} />
        )}
        {optionsetdelete && (
          <DeleteForm open={setoptionsetDelete} title="Option Set" id={iid} />
        )}
        {optionsetcreate && <CreateSetOption open={setOptionsetcreate} />}
        {
          Dishtagcreate &&<CreateDishTag open={setDishtagcreate} />
        }
        {
          editoptionset&&<EditSetOption open={setEditoptionset} data={iid}/>
        }
        {
          editDishtag &&<EditDishTag open={setEditDishtag} data={iid} />
        }
      </div>
    </div>
  );
}

export default Menus;
