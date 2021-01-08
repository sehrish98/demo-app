import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./@modules/Home/Home";
import Order from "./@modules/order/Order";
import Menus from "./@modules/Menu/Menus";
import Staff from "./@modules/staff/Staff";
import Login from "./@modules/auth/Login";
import Customer from "./@modules/customer/Customer";
import CustomRouter from "./@layouts/CustomRouter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Router>
          <Switch>
          <Route exact path="/login" component={Login} />
            <CustomRouter exact path="/" component={Home} />
            <CustomRouter exact path="/order" component={Order} />
            <CustomRouter exact path="/menu" component={Menus} />
            <CustomRouter exact path="/customer" component={Customer} />
            <CustomRouter exact path="/staff" component={Staff} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
