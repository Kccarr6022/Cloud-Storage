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
          src="https://d1mzwrkya7g9dq.cloudfront.net/out/v1/d9b93ceaadee45c5a12dbfa5c8566e54/index.m3u8"
        ></iframe>
      </div>
    </>
  );
};

export default Live;
