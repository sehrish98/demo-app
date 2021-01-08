import React, { useState } from "react";
import { Typography, Tooltip } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CustomButton from "../../@components/CustomButton";
import OutlineButton from "../../@components/OutlineButton";
import CreateMenu from "../../@components/CreateMenu";
import Delete from "../../@components/Delete";
import EditMenu from "../../@components/EditMenu";
import MenuItems from "../../@components/MenuItems";
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

const Menuitem = [
  {
    id: "1",
    title: "New Menu",
    items: [
      {
        id: "1",
        title: "Pizza",
        subItems: [
          {
            id: "1",
            title: "Noodels",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Pizza",
    items: [
      {
        title: "Pizza",
      },
      {
        title: "fast",
        subItems: [
          {
            title: "Lazania",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Pasta",
    items: [
      {
        title: "Pizza",
      },
      {
        title: "fast",
        subItems: [
          {
            title: "Lazania",
          },
        ],
      },
    ],
  },
];
const options=[
  {
    id:"1",
    title:"Pizza Menu - Base Choice"
  },
  {
    id:"2",
    title:"Pizza Menu - Extra Toppings"
  },
]
const tags=[
  {
    id:"1",
    title:"tag 1"
  },
  {
    id:"2",
    title:"tag 2"
  },
]
function Menus({ title, value }) {
  const classes = useStyles();
  const [editmenu, setEditMenu] = useState();
  const [opencreate, setOpencreate] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [arrays, setArrays] = useState(Menuitem);
  const [arrange, setArrange] = useState(false);
  const [show, setShow] = useState(false);
  const [dstop, setDstop] = useState(true);
  // const [option, setOption] = useState("Menu");
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    const newArray = Array.from(arrays);
    const [removed] = newArray.splice(source.index, 1);
    newArray.splice(destination.index, 0, removed);
    setArrays(newArray);
    console.log(arrays);
  };
  // const handleArrange = () => {
  //   setArrange(true);
  // };
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
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          margin: "40px 10px 40px 0px",
        }}
      >
        <CustomButton name="Menus" activ="true" state={setArrays} array={Menuitem}/>
        <CustomButton name="Option Set" state={setArrays} array={options} />
        <CustomButton name="Dish Tags" state={setArrays} array={tags}/>
      </div>
      <div style={{}}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{}}
              >
                {arrays.map((c, index) => (
                  <Draggable
                    draggableId={c.id}
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
                            {
                              arrays==Menuitem?<div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 15px",
                                cursor:"pointer"
                              }}
                            >
                              {show ? (
                                <ExpandMoreIcon
                                  onClick={() => setShow(false)}
                                />
                              ) : (
                                <ChevronRightIcon
                                  onClick={() => setShow(true)}
                                />
                              )}

                              <Typography variant="p">{c.title}</Typography>
                            </div>
                            :(<div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 15px",
                                cursor:"pointer"
                              }}
                            ><Typography variant="p">{c.title}</Typography></div>)
                            }
                            <div>
                              <Tooltip title="Edit" placement="Top">
                                <EditIcon
                                  fontSize="small"
                                  onClick={() => setEditMenu(true)}
                                  style={{
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: "gray",
                                  }}
                                />
                              </Tooltip>
                              <Tooltip title="Delete" placement="Top">
                                <DeleteIcon
                                  fontSize="small"
                                  onClick={() => setopenDelete(true)}
                                  style={{
                                    margin: "5px",
                                    cursor: "pointer",
                                    color: "gray",
                                  }}
                                />
                              </Tooltip>
                              <Tooltip title="Copy" placement="Top">
                                <FileCopyIcon
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
                          {show && (
                            <div>
                              {" "}
                              <MenuItems items={c.items} key={c.id} />
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
            <OutlineButton name="Cancel" open={setArrange} width="50%" title="save"/>
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
          <OutlineButton
            name="Create New Menu"
            open={setOpencreate}
            width="100%"
          />
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
        {opendelete && <Delete open={setopenDelete} />}
        {editmenu && <EditMenu open={setEditMenu} />}
      </div>
    </div>
  );
}

export default Menus;
