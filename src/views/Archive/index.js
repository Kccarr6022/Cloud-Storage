import React from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./index.scss";

const Archive = () => {
  return (
    <>
      <Header />
      <div className="archive-page">
        <h1 className="title">Archive</h1>
      </div>
      <Footer />
    </>
  );
};

export default Archive;
