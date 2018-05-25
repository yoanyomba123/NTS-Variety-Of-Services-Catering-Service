import React, { Component } from "react";
import Navbar from "./components/Layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Layout/footer";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
