import React, { useState } from "react";
import { Typography, Tooltip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Edit,
  Delete,
  FileCopy,
  CheckBoxOutlineBlank,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CreateDish from "./CreateDish";
import EditDish from "./EditDish";
import DeleteForm from "./DeleteForm";
import OutlineButton from "./OutlineButton";
import { MenuCategoryItemsDrag ,MenuCategoryItemsDelete} from "../@store/menu/MenuCategoryItems.Actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    detail: {
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
      margin: "15px 0px 00px 15px",
    },
    subdetail: {
      display: "flex",
      alignItems: "center",
    },
    tooltiptext: {
      margin: "5px",
      cursor: "pointer",
      color: "gray",
      fontSize: "medium",
    },
    typoName:{
      marginLeft: "5px"
    }
  })
);
function SubMenuItems({ id, menucat, dishes }) {
  const [opencreate, setOpencreate] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [editdish, setEditDish] = useState(false);
  const [iid, setid] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
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
    dispatch(MenuCategoryItemsDrag(sortOrder));
  };
  const handledelete = (e) => {
    if (e == "Menu_sub_Category") {
      const obj = { menuCategoryItemId: iid };
      dispatch(MenuCategoryItemsDelete(obj, history))
    }
  };
  return (
    <div className={classes.paper}>
      <div>
        {dishes?.map((c) => (
          <div className={classes.detail}>
            <div className={classes.subdetail}>
              <CheckBoxOutlineBlank fontSize="small" />
              <Typography variant="p" className={classes.typoName}>
                {c.name}
              </Typography>
            </div>
            <div>
              <Tooltip title="Edit" placement="top">
                <Edit
                  className={classes.tooltiptext}
                  onClick={() => (setEditDish(true), setid(c))}
                />
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <Delete
                  onClick={() => (setopenDelete(true), setid(c._id))}
                  className={classes.tooltiptext}
                />
              </Tooltip>
              <Tooltip title="Copy" placement="Top">
                <FileCopy className={classes.tooltiptext} />
              </Tooltip>
            </div>
          </div>
        ))}
        {opencreate && (
          <CreateDish open={setOpencreate} menuId={id} menucat={menucat} />
        )}
        {opendelete && (
          <DeleteForm open={setopenDelete} title="Dishes" handledelete={() => {
            handledelete("Menu_sub_Category");
          }}/>
        )}
        {editdish && (
          <EditDish
            open={setEditDish}
            menuId={id}
            menucat={menucat}
            data={iid}
          />
        )}
      </div>
      <OutlineButton name="Create New Dish" open={setOpencreate} width="99%" />
    </div>
  );
}

export default SubMenuItems;
