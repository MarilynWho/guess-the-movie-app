import React from "react";
import DeezerAPI from "../utils/DeezerAPI";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Soundtrack = () => {
    const searchSong = query => {
        DeezerAPI.search(query)
          .then(res => console.log( res.data.data[0].preview))
          .catch(err => console.log(err));
      };
    
    return (
        <div className="container">
          <h1>MP3 player here below</h1>
          <AudioPlayer
            src= {searchSong("trolls")}
            volume={0.5}
            // Try other props!
          />
        </div>
      );
};

export default Soundtrack;