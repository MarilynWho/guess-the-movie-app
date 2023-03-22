import React from "react";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-info" class="info-page">
      <h2 className="info-title">Info</h2>
      <p>The concept is simple, can you guess that movie based on a song</p>
      <p>
        We use some exceptionally beatiful posters to give you a clue, and you
        can play the song and check the corresponding song for the poster
      </p>
      <h5>How to play:</h5>
      <p>- Prepare a playlist of 5 songs from famous movie soundtracks</p>
      <p>
        - Gather your friends or family members and explain the rules of the
        game: play each song one at a time and challenge the players to guess
        which movie the song belongs to
      </p>
      <p>
        - For each correct answer, the player earns one point. Keep track of the
        points throughout the game.
      </p>
      <p>
        - At the end of the game, tally up the scores and determine the winner.
        The person with the most points will be crowned the "Movie Master" or
        given a title based on their score
      </p>
      <p>
        - Repeat the game with a different playlist of songs for a new challenge{" "}
      </p>
      <h6>This game is for family and friends</h6>
      <h6>Guess the movie App is made for movie-lovers</h6>
      <h5>You ready?</h5>
      <button className="button" onClick={() => navigate("/game")}>
        START
      </button>
    </div>
  );
};

export default Info;
