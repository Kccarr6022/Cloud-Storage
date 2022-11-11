import React, { useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import Error401 from "../Error401";
import "./index.scss";

const Upload = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVideos();
  }, []);

  return store.token == null ? (
    <>
      <Error401 />
    </>
  ) : (
    <>
      <Header />
      <div className="upload-page">
        <h1 className="title">Upload</h1>
      </div>
      <Footer />
    </>
  );
};

export default Upload;
