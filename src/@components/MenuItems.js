import React, { useState } from "react";
import { Typography, Tooltip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  ExpandMore,
  ChevronRight,
  Edit,
  Delete,
  FileCopy,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useHistory } from "react-router-dom";

import OutlineButton from "./OutlineButton";
import SubMenuItems from "./SubMenuItems";
import DeleteForm from "./DeleteForm";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";
import {
  MenuCategoryDrag,
  MenuCategoryDelete,
} from "../@store/menu/MenuCategory.Actions";

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
      backgroundColor: "white",
      margin: "5px 2px",
    },
    paper: {
      alignSelf: "center",
      width: "100%",
      margin: "10px 10px 10px 10px",
    },
    tooltiptext: {
      margin: "5px",
      cursor: "pointer",
      color: "gray",
      fontSize: "medium",
    },
    subdetail: {
      display: "flex",
      alignItems: "center",
    },
  })
);
function MenuItems({ items, dishes, id }) {
  const [show, setShow] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [editcategory, setEditCategory] = useState(false);
  const [iid, setid] = useState(null);
  const [mcid, setmcid] = useState(null);
  const [opencreate, setOpencreate] = useState(false);
  const [currentIndex, setcurrentIndex] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleclick = (index) => {
    setShow(!show);
    setcurrentIndex(index);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let sortOrder = {
      from: source.index + 1,
      to: destination.index + 1,
      id: draggableId,
    };
    // setArrays(sortOrder);
    dispatch(MenuCategoryDrag(sortOrder));
  };
  const handledelete = (e) => {
    if (e == "Menu_Category") {
      const obj = { menuCategoryId: iid };
      dispatch(MenuCategoryDelete(obj, history));
    }
  };
  return (
    <div className={classes.paper}>
      {items?.map((m, index) => (
        <>
          <div>
            <div className={classes.detail}>
              <div className={classes.subdetail}>
                {show && index == currentIndex ? (
                  <ExpandMore onClick={() => handleclick(index)} />
                ) : (
                  <ChevronRight onClick={() => handleclick(index)} />
                )}
                <Typography variant="p">{m.name}</Typography>
              </div>
              <div>
                <Tooltip title="Edit" placement="Top">
                  <Edit
                    className={classes.tooltiptext}
                    onClick={() => (setEditCategory(true), setid(m))}
                  />
                </Tooltip>
                <Tooltip title="Delete" placement="Top">
                  <Delete
                    className={classes.tooltiptext}
                    onClick={() => (setopenDelete(true), setid(m._id))}
                  />
                </Tooltip>
                <Tooltip title="Copy" placement="Top">
                  <FileCopy className={classes.tooltiptext} />
                </Tooltip>
              </div>
            </div>
          </div>
          {show && index == currentIndex && (
            <SubMenuItems
              items={m.subItems}
              dishes={dishes}
              menucat={m._id}
              id={id}
            />
          )}
        </>
      ))}
      <OutlineButton
        name="Create New Menu Category"
        open={setOpencreate}
        width="100%"
        state={opencreate}
      />
      {opencreate && <CreateCategory open={setOpencreate} id={id} />}
      {opendelete && (
        <DeleteForm
          open={setopenDelete}
          title="Menu Category"
          handledelete={() => {
            handledelete("Menu_Category");
          }}
        />
      )}
      {editcategory && <EditCategory open={setEditCategory} data={iid} />}
    </div>
  );
}

export default MenuItems;
