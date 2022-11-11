import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { Context } from "../../../store/appContext";
import "./index.scss";

const Signin = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SigninClick = () => {
    actions.login(email, password);
  };
  const RegisterClick = () => {
    navigate("/register");
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");

  return (
    <>
      <Navbar />
      <div className="signin-page">
        <h1 className="title">Signin</h1>
        <div>
          <label for="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="password">Password: </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={SigninClick}>Signin</button>
          <button onClick={RegisterClick}>Create Account</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
