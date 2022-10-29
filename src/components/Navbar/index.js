import React from "react";
import './index.css'

const Navbar = () => {
  return (
    <nav className="navigation-menu">
        <ul className="navigation-items">
            <li>
                <a href='/'></a>
            </li>
            <li>
                <a href='/newvideo'>New video</a>
            </li>
            <li>
                <a href='/archieve'>Archieve</a>
            </li>
            <li>
                <a href='/live'>Liveview</a>
            </li>
            <li>
                <button href='/login'>Login</button>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;