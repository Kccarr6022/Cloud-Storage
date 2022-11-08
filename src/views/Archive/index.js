import React, { useContext, useEffect } from "react";
import Header from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./index.scss";
import { Context } from '../../store/appContext'

const Archive = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVideos();
  }, []);
  console.log(store.videos);

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
