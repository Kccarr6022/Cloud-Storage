import React from "react";
import Navbar from "../../components/NavBar";
import "./index.scss";

const Error401 = () => {
  return (
    <>
      <Navbar />
      <div className="unauthorized-page">
        <h1 className="title">Error 401 (unauthorized)</h1>
        <h2 className="message">Must sign in to access this resource...</h2>
      </div>
    </>
  );
};

export default Error401;
