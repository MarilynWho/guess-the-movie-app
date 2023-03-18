import React from "react";
import { useNavigate } from "react-router-dom";
import handthree from "../images/Purple-in-Jumper2.png";
import Form from "./Form";

const WellDone = () => {
  const navigate = useNavigate();
  const getScore = localStorage.getItem("newBestScore");

  return (
    <div data-test="component-well-done">
      <h2 className="well-donetitle"> Well Done!!!</h2>

      <button className="button mb-3 " onClick={() => navigate("/game")}>
        Another go
      </button>
      <h2>Or wanna save it?</h2>
      <Form score = {getScore} />
      <button className="button" onClick={() => navigate("/score")}>
        I am tired
      </button>

      <div className="welldone-img">
        <img src={handthree} alt="hand"></img>
      </div>
    </div>
  );
};

export default WellDone;
