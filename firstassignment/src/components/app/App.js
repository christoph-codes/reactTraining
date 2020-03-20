import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "../home/Home";
import AssignmentOne from "../assignmentOne/AssignmentOne";
import AppNavigation from "../appNavigation/AppNavigation";

export default function App() {
  return (
    <Router>
      <div className="App">
        <AppNavigation/>
        <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/assignment1" component={AssignmentOne} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}
