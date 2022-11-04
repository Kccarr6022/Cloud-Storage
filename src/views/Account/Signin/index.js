import React, { useContext, useState } from "react";
import axios from "axios";
import "./index.scss";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const body = JSON.stringify({
    email: email,
    password: password,
  });

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = () => {
    axios.post("http://localhost:5000/api/login", body, customConfig);
  };

  return (
    <>
      <Navbar />
      <div className="signin-page">
        <h1 className="title">Sign in</h1>
        <div>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={result}>Signin</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
