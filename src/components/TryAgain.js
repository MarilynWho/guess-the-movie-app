import React from "react";
import handtwo from "../images/Purple-in-Jumper3.png";
import { useNavigate } from "react-router-dom";

const TryAgain = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-try-again">
      <h1 className="titleagain">Try Again</h1>
      <div className="try-btn">
        <button className="button-Again" onClick={() => navigate("/game")}>
          Play Again
        </button>
      </div>
      <div className="handTwo">
        <img src={handtwo} alt="hand" className="hand-two"></img>
      </div>
    </div>
  );
};

export default TryAgain;
