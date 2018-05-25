/*jshint esversion: 6 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    //  set link object
    var homelinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Menu">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Dedications">
            Dedications
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/HallRequest">
            Hall Rental Request
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">
            Contact Us
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3>NTS Variety Of Services</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                </Link>
              </li>
            </ul>
            {homelinks}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
