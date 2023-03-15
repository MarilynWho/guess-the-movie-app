import React from "react";
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
};

export default Home;
