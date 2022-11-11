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
          src="https://livestream.com/accounts/22787557/events/10671512"
          width="1920"
          height="1080"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Live;
