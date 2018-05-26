import React, { Component } from "react";
import Navbar from "./components/Layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";
import Dedications from "./components/Dedications/Dedications";
import Footer from "./components/Layout/footer";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Menu" component={Menu} />
          <Route exact path="/Dedications" component={Dedications} />
          <Route exact path="/Contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
