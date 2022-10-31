import React from "react";
import logo from "./assets/logofile.png";
import { Link } from 'react-router-dom'

// ---------Responsive-navbar-active-animation-----------

const Navbar = () => {
  return (
    <div className="fixed w-full flex justify-between p-4 items-center">
      <div className="logo">
        <img src={logo} width="70px;" />
      </div>

      <nav>
        <ul className="md:flex gap-8 p-6 uppercase bg-black/10">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/live'>Live</Link></li>
          <li><Link to='/archieve'>Archieve</Link></li>
          <li><Link to='/analytics'>Analytics</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
