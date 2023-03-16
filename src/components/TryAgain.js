import React from "react";
import { useNavigate } from "react-router-dom";


const TryAgain = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-try-again">
      You lost :(
      <button className="button" onClick={() => navigate("/game")}>
        Play Again
      </button>
    </div>
  );
};

export default TryAgain;
