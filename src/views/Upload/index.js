import React from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import './index.scss'

const Upload = () => {
  return (
    <>
      <Header />
      <div className="upload-page">
        <h1 className="title">
          Upload
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Upload;
