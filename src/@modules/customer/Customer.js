import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import StaffDetailModal from "../../@components/StaffDetailModal";
import CustomButton from "../../@components/CustomButton";

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
function Customer() {
  const classes = useStyles();
  const [showStaff, setShowStaff] = useState(false);
  const paginationData = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "true",
      },
      {
        label: "Revenue",
        field: "revenue",
      },
      {
        label: "Average Preparation Time",
        field: "Avgtime",
      },
      {
        label: "Status",
        field: "status",
        sort: "disabled",
      },
      {
        label: "Price",
        field: "price",
      },
      {
        label: "Rating",
        field: "rating",
      },
    ],
    rows: [
      {
        id: "3",
        Avgtime: "10 min",
        revenue: "2222",
        price: "5 SAR Liter",
        rating: "3.5",
        status: <CustomButton name="Order" activ="true"/>,
        clickEvent: () => {
          setShowStaff(true);
        },
      },
      {
        id: "3",
        Avgtime: "10 min",
        revenue: "2222",
        price: "5 SAR Liter",
        rating: "3.5",
        status: <CustomButton name="Order"activ="true" />,
      },
      {
        id: "3",
        Avgtime: "10 min",
        revenue: "2222",
        price: "5 SAR Liter",
        rating: "3.5",
        status: <CustomButton name="Order" activ="true" />,
      },
    ],
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
      <Paper style={{ padding: "20px", margin: "10px" }}>
        <MDBDataTable bordered small data={paginationData} />
      </Paper>

      {showStaff && <StaffDetailModal open={setShowStaff} />}
    </div>
  );
}

export default Customer;
