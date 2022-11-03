import React from "react";
import "./index.scss";
import logo from "../../assets/logofile.png";

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-items">
        <li>
          <a href='/upload'>Upload</a>
        </li>
        <li>
          <a href='/archive'>Archive</a>
        </li>
        <li>
          <a href='/'>
            <img src={logo} className="navigation-logo" />
          </a>
        </li>
        <li>
          <a href='/live'>Live</a>
        </li>
        <li>
          <a href='/signin'>Signin</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
