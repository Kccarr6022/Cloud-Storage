import React, { useEffect, useContext } from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./index.scss";
import { Context } from "../../store/appContext";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1 className="title">Cloud Storage</h1>
        <p>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
