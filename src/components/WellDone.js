import React from "react";
import { useNavigate } from "react-router-dom";
import handthree from "../images/Purple-in-Jumper2.png";
import Form from "./Form";

const WellDone = (props) => {
  const navigate = useNavigate();
  const getScore = localStorage.getItem("newBestScore");

  return (
    <div data-test="component-well-done">
      <h2 className="well-donetitle"> You are the Movie Master!</h2>

      <h3 className="saveit">Do you wanna save your results?</h3>
      <Form score={getScore} />
      <div className=" container welld-button">
        <div className="another">
          <button className="button-wd  " onClick={() => navigate("/game")}>
            Another go
          </button>
        </div>
        <div className="tired">
          <button className="btn-tired" onClick={() => navigate("/score")}>
            I am tired
          </button>
        </div>
      </div>
      <div className="welldone-img">
        <img src={handthree} alt="hand"></img>
      </div>
    </div>
  );
};

export default WellDone;
