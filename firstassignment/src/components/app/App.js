import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./App.scss";
import FirstAssignment from "../firstassignment/FirstAssignment";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/first-assignment">First Assignment</Link>
        <Switch>
          <Route exact path="/first-assignment" component={FirstAssignment} />
        </Switch>
      </div>
    </Router>
  );
}
