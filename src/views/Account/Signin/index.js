import React, { useContext, useState } from "react";
import Navbar from "../../../components/NavBar";
import "./index.scss";
import Footer from "../../../components/Footer";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");

  const data = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  const onClickHandler = () => {
    fetch("http://localhost:5000/api/login", data)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert(`There was an error`);
        }
      })
      .then((data) => {
        sessionStorage.setItem("token", data.access_token);
      })
      .catch((error) => {
        console.error(`There was an error: ${error}`);
      });
  };

  return (
    <>
      <Navbar />
      <div className="signin-page">
        <h1 className="title">Signin</h1>
        {(token && token != "" && token != undefined) ? (
          `You are logged in with ${token}`
        ) : (
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
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Signin;
