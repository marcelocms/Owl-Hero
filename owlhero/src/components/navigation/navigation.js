import React from "react";
import "./navigation.css";
import logo from "../img/logo.svg";

function Navbar() {
  return (
    <div>
      <nav className="header sticki">
        <div className="navbar"></div>
      </nav>
      <img className="logo sticki" src={logo} />
    </div>
  );
}

export default Navbar;
