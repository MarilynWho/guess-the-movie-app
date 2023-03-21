import React from "react";
import handtwo from "../images/Purple-in-Jumper3.png";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const TryAgain = (props) => {
  const navigate = useNavigate();
  const getScore = localStorage.getItem("newBestScore");

  const playAgain = () =>{
    localStorage.removeItem("currentScore");
    navigate("/game")
  }

  return (
    <div data-test="component-try-again">
      <h1 className="titleagain">Try Again</h1>
      <h3 className="save text-white">Save your score here</h3>
      <div className="getscore">
        <Form score={getScore} />
      </div>
      <div className="again">
        <button className="button-Again mt-3" onClick={() => playAgain()}>
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
