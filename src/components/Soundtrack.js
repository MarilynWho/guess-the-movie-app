import React, { useEffect, useState } from "react";
import DeezerAPI from "../utils/DeezerAPI";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Soundtrack = (props) => {
  const { soundtrack } = props;

  return (
    <div className="container audio-player" style={{ width: "475px" }}>
      <AudioPlayer
        autoPlay
        src={soundtrack}
        volume={0.5}
      />
    </div>
  );
};

export default Soundtrack;
