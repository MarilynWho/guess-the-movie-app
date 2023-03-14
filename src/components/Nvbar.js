import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-test="component-navbar">
      <nav class="navbar sticky-top navbar-light bg-light">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scores">Scores</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
