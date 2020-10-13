import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./@modules/Profile/Profile";
import Home from "./@modules/Home/Home";
import Layout from "./@layouts/Layout";

import "./App.css";
import DirectMessages from "./@modules/DirectMessages/DirectMessages";

function App() {
  return (
    <div className="App">
      <div className="background">
        </div>
      <Router>
                <Switch>
                  <Layout>
                <Route path="/home" component={Home}/>
                <Route path="/message" component={DirectMessages}/>
                <Route path="/profile" component={Profile}/>
                <Route exact path="/" component={Home}/>
                </Layout>
                </Switch>
                </Router>
    </div>
  );
}

export default App;
