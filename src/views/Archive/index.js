import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import VideoCard from "../../components/VideoCard";
import Error401 from "../Error401";
import "./index.scss";

const Archive = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVideos();
  }, []);

  return (store.token == null ) ? (
    <>
      <Error401 />
    </>
  ) : store.videos ? (
    <>
      <Header />
      <div className="archive-page">
        <h1 className="title">Archive</h1>
        <div className="videos">
          <h2 className="videos-header">Videos</h2>
          <div className="videocard-container">
            <VideoCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <h1 className="title">Loading...</h1>
  );
};

export default Archive;
