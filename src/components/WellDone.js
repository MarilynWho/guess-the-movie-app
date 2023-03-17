import React from "react";
import { useNavigate } from "react-router-dom";
import handthree from "../images/Purple-in-Jumper2.png";

const WellDone = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-well-done">
      <h2 className="well-donetitle"> Well Done!!!</h2>
      <button className="button" onClick={() => navigate("/game")}>
        Another go
      </button>
      <div className="welldone-img">
        <img scr={handthree} alt="hand"></img>
      </div>
    </div>
  );
};

export default WellDone;