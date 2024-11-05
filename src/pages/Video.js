import React from "react";
import YouTube from "react-youtube";

const Video = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    //   autoplay: 1,
    },
  };

  // const handleOnReady = (e) => {
  //   e.target.pauseVideo();
  // };

  return (
    <div className="video-container">
      <YouTube videoId="xVPGgq4A6kU" opts={opts} />
    </div>
  );
};

export default Video;
