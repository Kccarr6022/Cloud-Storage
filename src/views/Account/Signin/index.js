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
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const onClickHandler = () => {
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");

  return (
    <>
      <Navbar />
      <div className="signin-page">
        <h1 className="title">Signin</h1>
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={onClickHandler}>Signin</button>
          {store.videos}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
