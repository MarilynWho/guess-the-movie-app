import React from "react";
import hand from "../images/Purple-in-Basic5.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div data-test="component-home" className="homePage">
      <div className="Container">
        <h1 className="title">Guess the movie</h1>
      </div>
      <div className="container home">
        <div className="btn-one">
          <button className="button" onClick={() => navigate("/game")}>
            START
          </button>
          <div className="btn-two">
            <button className="info" onClick={() => navigate("/info")}>INFO</button>
          </div>
        </div>
        <div className="hand-img">
          <img src={hand} alt="Hand" className="hand"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
