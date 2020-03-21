import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
// Main Pages/Components
import AppNavigation from "../appNavigation/AppNavigation";
import Home from "../home/Home";
// Assignments
import AssignmentOne from "../assignmentOne/AssignmentOne";
import AssignmentTwo from "../assignmentTwo/AssignmentTwo";

export default function App() {
  return (
    <Router>
      <div className="App">
        <AppNavigation/>
        <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/assignment1" component={AssignmentOne} />
          <Route exact path="/assignment2" component={AssignmentTwo} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}
