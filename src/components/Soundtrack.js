import React, { useState } from "react";
import DeezerAPI from "../utils/DeezerAPI";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Soundtrack = () => {
  //sample query for a song
  const query = "Shrek";
  
  const [songUrl, setUrl] = useState("");
  const searchSong = (query) => {
    DeezerAPI.search(query)
      .then((res) => {
        setUrl(res.data.data[0].preview);
        console.log(songUrl);
      })
      .catch((err) => console.log(err));
  };

  searchSong(query);

  return (
    <div className="container">
      <p>MP3 player below</p>
      <AudioPlayer
        autoPlay
        src={songUrl}
        volume={0.5}
        // Try other props!
      />
    </div>
  );
};

export default Soundtrack;
