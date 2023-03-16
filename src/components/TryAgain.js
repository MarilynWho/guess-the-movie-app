import React from "react";
import handtwo from "../images/Purple-in-Jumper3.png";

const TryAgain = (props) => {
  return (
    <div data-test="component-try-again">
      <h1>Try Again</h1>
      <button>Next</button>
      <img src={handtwo} alt="hand" className="hand-two"></img>
    </div>
  );
};

export default TryAgain;
