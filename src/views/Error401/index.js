import React from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./index.scss";

const Error401 = () => {
  return (
    <>
      <Navbar />
      <div className="unauthorized-page">
        <h1 className="title">Error 401<br></br>(unauthorized)</h1>
        <h2 className="message">Must sign in to access this resource...</h2>
      </div>
      <Footer />
    </>
  );
};

export default Error401;
