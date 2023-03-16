import React, { useState, useEffect } from "react";
import API from "../utils/Api-omdb";
import movieData from "../data/movieData.json";
import Soundtrack from "./Soundtrack";

const Game = () => {
  const [data, setData] = useState(null);
  console.log("hello");
  // function to rundomize our array of movies
  function shuffle(array) {
    const copy = Array.from(array);
    for (let i = copy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const choosePairs = shuffle(movieData).slice(0, 10);
  // console.log(choosePairs);

  // Just an example of movie to search on OMDB
  const query = "Thor: Love and Thunder";

  // function to get data from OMDB

  useEffect(() => {
    API.search(query)
      .then((res) => {
        setData(res.data.Poster);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div data-test="component-game">
      {/* add posters */}
      <div className="poster">
        <img src={data} alt="name" className="img-game" />
        <img src={data} alt="name" className="img-game-two" />
      </div>

      <Soundtrack song={query} />
      <div className="game-btn">
        <button className="game">I am tired</button>
      </div>
    </div>
  );
};

export default Game;
