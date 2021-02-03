import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import NavBar from "./NavBar";
import CustomCard from "../../@components/CustomCard";

const list = [
  {
    id: "1",
    image:
      "https://ucarecdn.com/87612477-521b-4854-9068-d56adca0576c/-/resize/x400/-/format/auto/-/progressive/yes/garlic-bread-600-400.jpeg",
    name: "Garlic Bread",
    type: "sides",
    price: "50.26",
    qty: 1,
  },
  {
    id: "2",
    image:
      "https://ucarecdn.com/dc42d806-534b-4e51-a2c6-870440391524/-/resize/x400/-/format/auto/-/progressive/yes/fries-600-400.jpeg",
    name: "Fries",
    type: "sides",
    price: "70.56",
    qty: 1,
  },
  {
    id: "3",
    image:
      "https://ucarecdn.com/7ebd6e08-efec-4fe1-a2ac-58efdd21e371/-/resize/x400/-/format/auto/-/progressive/yes/fried-chicken-600-400.jpeg",
    name: "Garlic Bread",
    type: "sides",
    price: "90.89",
    qty: 1,
  },
  {
    id: "4",
    image: "",
    name: "2 Pizzas & 1 Side",
    description: "Grab any 2 pizzas and any side with this combo",
    type: "Combo Deals",
    price: "150.34",
    qty: 1,
  },
];
const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      alignSelf: "center",
      width: "100%",
      display: "flex",
      placeItems: "center",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: "1290px",
      padding: "10px",
      backgroundColor: "#ececec",
      display: "flex",
      flexWrap: "wrap",
    },
    detail: {
      width: "100%",
      backgroundColor: "#ececec",
    },
    dash__board: {
      top: 0,
      position: "sticky",
      zIndex: "999",
      backgroundColor: "#ececec",
    },
  })
);

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dash__board}>
        <Header />
        <NavBar />
      </div>
      <div className={classes.detail}>
        <div className={classes.paper}>
          {list.map((l) => (
            <CustomCard
              des={l.description}
              name={l.name}
              image={l.image}
              type={l.type}
              price={l.price}
              id={l.id}
              qty={l.qty}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
