import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./@components/header/header";
import Profile from "./@components/Profile/Profile";
import Home from "./@components/Home/Home";

import "./App.css";
import DirectMessages from "./@components/DirectMessages/DirectMessages";

function App() {
  return (
    <div className="App">
      <div className="background">
        </div>
      <Router>
                {/* <Link to="">Instagram</Link> */}
                <Header/>
                <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/message" component={DirectMessages}/>
                <Route path="/profile" component={Profile}/>
                <Route exact path="/" component={Home}/>
                </Switch>
                </Router>
    </div>
  );
}

export default App;
