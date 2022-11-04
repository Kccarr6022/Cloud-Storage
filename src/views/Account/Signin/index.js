import React from "react";
import "./index.scss";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="signin-page">
        <h1 className="title">Sign in</h1>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
