import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Soundtrack = (props) => {
  const { soundtrack } = props;

  return (
    <>
      <div className="container audio-player" style={{ width: "475px" }}>
        <div className="audio">
          <AudioPlayer autoPlay src={soundtrack} volume={0.5} />
        </div>
      </div>
    </>
  );
};

export default Soundtrack;
