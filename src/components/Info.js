import React from "react";
import { useNavigate } from "react-router-dom";

const Info = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-info">
      <h2 className="info-title">Info</h2>
      <p>The concept is simple, can you guess that movie based on a song</p>
      <p>
        We use some exceptionally beatiful posters to give you a clue, and you
        can play the song and check the corresponding song for the poster
      </p>
      <h5>How to play:</h5>
      <p>- The player must answer 5 questions</p>
      <p>- You will receive one point for each correct answer.</p>

      <h6>This game is for family and friends</h6>
      <h6>Guess the movie App is made for movie-lovers</h6>
      <h6>You ready?</h6>
      <button className="button" onClick={() => navigate("/game")}>
            START
          </button>
    </div>
  );
};

export default Info;
