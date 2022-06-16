import React from "react";
import ReactPlayer from "react-player";
import "./Player.css";

function Player(props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
        className="react-player"
        playing
        width="100%"
        height="100%"
        controls={false}
      />
    </div>
  );
}

export default Player;
