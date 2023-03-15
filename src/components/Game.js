import React from "react";
import API from "../utils/Api-omdb";
import movieData from "../data/movieData.json";

const Game = () => {
  
  function shuffle(array) {
    const copy = Array.from(array);
    for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
   }
    return copy;
  }
  
  const choose5pairs = shuffle(movieData).slice(0, 10);
  console.log(choose5pairs);
  const query = "tt0451279";

  function searchMovie (param) {
     API.search(param)
       .then((res) => console.log(res))
       .catch((err) => console.log(err));
  };
  searchMovie(query);
  return (
    <div data-test="component-game">
      
    </div>
  );
};

export default Game;

