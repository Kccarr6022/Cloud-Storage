import React from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import './index.scss'

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1 className="title">
          Cloud Storage
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Home