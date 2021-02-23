import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./@modules/Home/Home";
import Order from "./@modules/order/Order";
import Menus from "./@modules/Menu/Menus";
import Login from "./@modules/auth/Login";
import Staff from "./@modules/staff/Staff";
import CustomRouter from "./@layouts/CustomRouter";
import Dashboard from "./@modules/dashboard/Dashboard";
import Footer from "./@modules/footer/Footer";
import Settings from "./@components/Settings";
import StickyHeadTable from "./@modules/Cashier/Cashier"
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div className="background"></div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <DashBoardRoute exact path="/dash-board" component={Dashboard} />
          <CustomRouter exact path="/order" component={Order} />
          <CustomRouter exact path="/menu" component={Menus} />
          <CustomRouter exact path="/staff" component={Staff} />
          <CustomRouter exact path="/settings" component={Settings} />
          <CustomRouter exact path="/" component={Home} />
          <CustomRouter exact path="/cashier" component={StickyHeadTable} />
        </Switch>
      </Router>
    </div>
  );
}
const DashBoardRoute = (props) => {
  return (
    <Route
      path={props.path}
      exact={props.exact}
      component={() => (
        <>
          <props.component />
          <Footer></Footer>
        </>
      )}
    />
  );
};
export default App;
