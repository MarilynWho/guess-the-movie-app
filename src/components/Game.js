import React from "react";
import API from "../utils/Api-omdb";
import movieData from "../data/movieData.json";
import Soundtrack from "./Soundtrack";

const Game = () => {
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
  console.log(choosePairs);

  // Just an example of movie to search on OMDB
  const query = "trolls";

  // function to get data from OMDB
  let imgURL = "";
  function searchMovie(param) {
    API.search(param)

      .then((res) => {
        imgURL = res.data.Poster;
        console.log(imgURL);
      })
      .catch((err) => console.log(err));
  }

  searchMovie(query);

  return (
    <div data-test="component-game">
      {/* add posters */}
      <img src={imgURL} alt="name" />
      <img src={imgURL} alt="name" />
      <Soundtrack/>
      <div className="game-btn">
        <button className="game">I am tired</button>
      </div>
    </div>
  );
};

export default Game;
