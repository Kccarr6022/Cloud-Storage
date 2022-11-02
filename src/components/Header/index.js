import React from "react";
import logo from "../../assets/logofile.png";
import MenuItems from './items/MenuItems'
import { Link } from 'react-router-dom'

// ---------Responsive-navbar-active-animation-----------

const Header = () => {
  return (
    <div className="fixed w-full flex justify-between p-4 items-center">
      <div className="logo">
        <img src={logo} width="50px;" />
      </div>
      <ul className="hidden md:flex gap-8 pd-6 uppercase bg-black/10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/live">Live</Link></li>
            <li><Link to="/archieve">Archieve</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
        </ul>
      <nav>
        
      </nav>
    </div>
  );
};

export default Header;
