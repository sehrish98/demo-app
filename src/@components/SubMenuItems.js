import React, { useState } from "react";
import { Typography, Paper, Tooltip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Edit, Delete, FileCopy } from "@material-ui/icons";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

import CreateDish from "./CreateDish";
import EditDish from "./EditDish";
import DeleteForm from "./DeleteForm";
import OutlineButton from "./OutlineButton";

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
  })
);
function SubMenuItems({ id, menucat, dishes }) {
  const [opencreate, setOpencreate] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [editdish, setEditDish] = useState(false);
  const [iid, setid] = useState();
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div>
        {dishes?.map((c) => (
          <div className={classes.detail}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBoxOutlineBlankIcon fontSize="small" />
              <Typography variant="p" style={{ marginLeft: "5px" }}>
                {c.name}
              </Typography>
            </div>
            <div>
              <Tooltip title="Edit" placement="top">
                <Edit
                  fontSize="small"
                  onClick={() =>(setEditDish(true),setid(c))}
                  style={{
                    margin: "5px",
                    cursor: "pointer",
                    color: "gray",
                  }}
                />
              </Tooltip>
              <Tooltip title="Delete" placement="top">
                <Delete
                  fontSize="small"
                  onClick={() => (
                    setopenDelete(true), setid(c._id)
                  )}
                  style={{
                    margin: "5px",
                    cursor: "pointer",
                    color: "gray",
                  }}
                />
              </Tooltip>
              <Tooltip title="Copy" placement="Top">
                <FileCopy
                  // onClick={() => setOpencreate(true)}
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
        ))}
        {opencreate && (
          <CreateDish open={setOpencreate} menuId={id} menucat={menucat} />
        )}
        {opendelete && (
          <DeleteForm open={setopenDelete} title="Dishes" id={iid} />
        )}
        {
          editdish&&<EditDish open={setEditDish} menuId={id} menucat={menucat} data={iid}/>
        }
      </div>
      <OutlineButton name="Create New Dish" open={setOpencreate} width="99%" />
    </div>
  );
}

export default SubMenuItems;
