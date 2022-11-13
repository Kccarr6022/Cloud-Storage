import React from "react";
import Header from "../../components/NavBar";
import "./index.scss";

const Live = () => {
  return (
    <>
      <Header />
      <div className="live-page">
        <h3 className="title">Live</h3>

        <iframe
          src="//www.googletagmanager.com/ns.html?id=GTM-KNG43F"
          height="1920"
          width="1080"
        ></iframe>
      </div>
    </>
  );
};

export default Live;
