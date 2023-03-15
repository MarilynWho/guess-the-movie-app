import React from "react";
<<<<<<< HEAD
import hand from "../images/Purple-in-Basic5.png";

const Home = () => {
  return (
    <div data-test="component-home" className="homePage">
      <div className="Container">
        <h1 className="title">Guess the movie</h1>
      </div>
      <div className="container home">
        <div className="btn-one">
          <button className="button">Start</button>
          <div className="btn-two">
            <button className="info">info</button>
          </div>
        </div>
        <img src={hand} alt="Hand" className="hand"></img>
      </div>
    </div>
  );
=======
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return <div data-test="component-home">
    <h1>Guess the movie</h1>
    <button onClick={() => navigate("/game")}>Start</button>
  </div>;
>>>>>>> 6a113c1f85b168c323a117e9a27ae84ce83c48f3
};

export default Home;
