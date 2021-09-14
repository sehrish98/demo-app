import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./@modules/auth/Login";
import ForgetPassword from "./@modules/auth/ForgetPassword";
import Dashboard from "./@modules/dashboard/Dashboard";
import Profile from "./@modules/profile/Profile";
import Footer from "./@modules/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/forget-password" component={ForgetPassword} />
          <DashBoardRoute exact path="/profile" component={Profile} />
          <DashBoardRoute exact path="/" component={Dashboard} />
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
