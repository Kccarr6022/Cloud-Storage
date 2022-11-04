import React from "react";
import "./index.scss";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="register-page">
        <h1 className="title">Register</h1>
        <form method="POST">
            <label for="username" text=""/>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;