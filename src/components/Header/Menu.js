import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Menu.css";
import logo from "../../images/logo.png";

const Menu = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="https://fatmaGh.github.io/fatmaGh">
          <img className="logo" src={logo} height="250px" width="250px" />
        </Link>
      </div>
      <nav>
        <NavLink
          className="link"
          activeClassName="activeLink"
          exact
          to="https://fatmaGh.github.io/fatmaGh"
        >
          Home
        </NavLink>
        <NavLink
          className="link"
          activeClassName="activeLink"
          exact
          to="https://fatmaGh.github.io/fatmaGh/about"
        >
          About
        </NavLink>
        <NavLink
          className="link"
          activeClassName="activeLink"
          exact
          to="https://fatmaGh.github.io/fatmaGh/resume"
        >
          Resume
        </NavLink>
        <a className="link" href="mailto:fatma.ghaarsallah@gmail.com">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Menu;
