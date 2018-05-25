import React, { Component } from "react";
import Navbar from "./components/Layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Navbar />
        </Switch>
      </Router>
    );
  }
}

export default App;