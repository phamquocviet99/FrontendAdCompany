import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

function Player({project}) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={project?.urlVideo}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
      />
      
    </div>
  );
}

export default Player;
