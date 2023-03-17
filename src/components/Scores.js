import React from "react";

const Scores = () => {
  return (
    <div data-test="component-scores">
      <h2 className="score-title">My Score:</h2>
      <h2 className="score-title">Your Best Score:</h2>
      <button className="score-btn">Back Home</button>
    </div>
  );
};

export default Scores;
