import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "./index.scss";
import logo from "../../assets/logofile.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const onSignout = () => {
    actions.logout();
    navigate("/signin");
  };
  return (
    <nav className="navigation-bar">
      <ul className="navigation-items">
        <li>
          <a href="/upload">Upload</a>
        </li>
        <li>
          <a href="/archive">Archive</a>
        </li>
        <li>
          <a href="/">
            <img src={logo} className="navigation-logo" />
          </a>
        </li>
        <li>
          <a href="/live">Live</a>
        </li>
        <li>
          {!store.token ? (
            <a href="/signin">Signin</a>
          ) : (
            <span onClick={onSignout}>Signout</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
