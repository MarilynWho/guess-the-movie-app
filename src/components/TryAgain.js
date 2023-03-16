import React from "react";
import handtwo from "../images/Purple-in-Jumper3.png";
import { useNavigate } from "react-router-dom";


const TryAgain = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-try-again">
      <h1>Try Again</h1>
      <button className="button" onClick={() => navigate("/game")}>
        Play Again
      </button>
      <img src={handtwo} alt="hand" className="hand-two"></img>
    </div>
  );
};

export default TryAgain;
