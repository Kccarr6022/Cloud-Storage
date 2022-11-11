import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordagain] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const RegisterClick = () => {
    actions.register(firstname, lastname, email, password);
  };

  const SigninClick = () => {
    navigate("/signin");
  };

  return (
    <>
      <Navbar />
      <div className="register-page">
        <h1 className="title">Register</h1>
        <label htmlFor="firstname">First Name: </label>
        <input
          id="firstname"
          type="text"
          placeholder="First name"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          required
        />
        <label htmlFor="lastname">Last Name: </label>
        <input
          id="lastname"
          type="text"
          placeholder="Last name"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <label htmlFor="passwordagain">Confirm Password: </label>
        <input
          id="passwordagain"
          type="password"
          placeholder="confirm password"
          value={passwordagain}
          onChange={(e) => {
            setPasswordagain(e.target.value);
          }}
          required
        />
        <button onClick={RegisterClick}>Create Account</button>
        <button onClick={SigninClick}>Signin</button>
      </div>

      <Footer />
    </>
  );
};

export default Register;
