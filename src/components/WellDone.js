import React from "react";
import { useNavigate } from "react-router-dom";

const WellDone = (props) => {
  const navigate = useNavigate();
  return (
    <div data-test="component-well-done">
      Well Done!!!
      <button className="button" onClick={() => navigate("/game")}>
        Another go
      </button>
    </div>
  );
};

export default WellDone;
