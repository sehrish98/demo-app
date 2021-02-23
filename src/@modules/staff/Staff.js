import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Avatar } from "@material-ui/core";
import { Help, Add } from "@material-ui/icons";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import StaffDetailModal from "../../@components/StaffDetailModal";
import CustomButton from "../../@components/CustomButton";
import CreateStaff from "../../@components/CreateStaff";
import { GetStaff } from "../../@store/auth/Staff.Actions";

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
function Staff() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {let role =localStorage.getItem("role")
  if(role === "STAFF"){
    history.push("/order")
  }
  }, []);
  useEffect(() => {
    dispatch(GetStaff());
  }, [dispatch]);
  const staffList = useSelector(({ staff__reducer }) => staff__reducer.staff);
  const classes = useStyles();
  const [showStaff, setShowStaff] = useState(false);
  const [createStaff, setCreateStaff] = useState(false);
  const [staffslist, setStaffList] = useState(false);
  const [objectStaff, setObjectStaff] = useState();
  const [lastseen, setLastseen] = useState();
  useEffect(() => {
    setStaffList(staffList);
  }, [staffList]);
  const paginationData = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "true",
      },
      {
        label: "Type",
        field: "type",
      },
      {
        label: "Name",
        field: "name",
      },
      {
        label: "Email",
        field: "email",
      },
      {
        label: "Verified",
        field: "verified",
      },
      {
        label: "Created",
        field: "created",
      },
      {
        label: "Last Seen",
        field: "lastseen",
      },
      {
        label: "Sessions",
        field: "session",
      },
      {
        label: "Order",
        field: "order",
      },
    ],
    rows:
      staffslist && staffslist.length > 0
        ? staffslist
            .sort(function (a, b) {
              return parseInt(b._id) - parseInt(a._id);
            })
            .map((staff, index) => {
              // const sta = staff.session;
              // var last = sta.slice(-1)[0];
              return {
                ...staff,
                id: index,
                type: staff.type,
                name: staff.firstName,
                email: staff.email,
                verified: staff.verified,
                created: staff.createdAt,
                // session: staff.session.length,
                lastseen: staff.lastseen,
                clickEvent: () => {
                  setShowStaff(true);
                  setObjectStaff(staff);
                },
              };
            })
        : [],
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
          Staff
        </Typography>
        <div>
          <Add
            onClick={() => setCreateStaff(true)}
            fontSize="medium"
            style={{
              backgroundColor: "white",
              border: "1px solid rgb(214, 214, 214)",
              borderRadius: "3px",
              cursor: "pointer",
              padding: "3px",
            }}
          />
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
      </div>
      <Paper style={{ padding: "20px", margin: "10px" }}>
        <MDBDataTable bordered small data={paginationData} />
      </Paper>

      {showStaff && (
        <StaffDetailModal open={setShowStaff} staff={objectStaff} />
      )}
      {createStaff && <CreateStaff open={setCreateStaff} />}
    </div>
  );
}

export default Staff;
