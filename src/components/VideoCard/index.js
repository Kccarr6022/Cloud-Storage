import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "./index.scss";

const VideoCard = (props) => {
  const { store } = useContext(Context);

  return store.videos ? (
    <div id="videocard">
      <h1 className="videoname">video title</h1>
    </div>
  ) : (
    <div id="videocard">
      <h1>loading</h1>
    </div>
  );
};

export default VideoCard;
