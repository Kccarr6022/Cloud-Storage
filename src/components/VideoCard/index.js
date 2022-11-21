import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "./index.scss";
import { Button } from "@material-ui/core";

const VideoCard = (props) => {
  const { store } = useContext(Context);

  return (
    <div id="videocard">
      <h1 className="videoname">{props.title}</h1>
      <video autoplay controls muted src={props.video} width="200px"/>
      <button>
        Download
      </button>
      <button>
        Watch
      </button>
      <button>
        Del
      </button>
    </div>
  )
};

export default VideoCard;
