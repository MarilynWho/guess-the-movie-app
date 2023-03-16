import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <img src={logo} alt="Guess the Movie" className="logo"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item mr-4">
            <Link className="nav  " to="/">
              Home
            </Link>
          </li>
          <li className="nav-item mr-4 ">
            <Link className="nav" to="/scores">
              Scores
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link className="nav " to="/info">
              Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
