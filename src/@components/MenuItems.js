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

import OutlineButton from "./OutlineButton";
import SubMenuItems from "./SubMenuItems";
import DeleteForm from "./DeleteForm";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";

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
  })
);
function MenuItems({ items,dishes, id }) {
  const [show, setShow] = useState(false);
  const [opendelete, setopenDelete] = useState(false);
  const [editcategory, setEditCategory] = useState(false);
  const [iid, setid] = useState(null);
  const [mcid, setmcid] = useState(null);
  const [opencreate, setOpencreate] = useState(false);
  const [currentIndex, setcurrentIndex] = useState();
  const classes = useStyles();
  const handleclick = (index) => {
    setShow(!show);
    setcurrentIndex(index);
  };
  return (
    <div className={classes.paper}>
      {items?.map((m, index) => (
        <>
          <div>
            <div className={classes.detail}>
              <div style={{ display: "flex", alignItems: "center" }}>
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
                    fontSize="small"
                    onClick={() =>(setEditCategory(true),setid(m))}
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
                    onClick={() => (setopenDelete(true), setid(m._id))}
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
          </div>
          {show && index == currentIndex && (
            <SubMenuItems items={m.subItems} dishes={dishes} menucat={m._id} id={id} />
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
        <DeleteForm open={setopenDelete} title="Menu Category" id={iid} />
      )}
      {
       editcategory&& <EditCategory  open={setEditCategory} data={iid}/>
      }
    </div>
  );
}

export default MenuItems;
