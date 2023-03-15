import React from "react";
import Soundtrack from "./Soundtrack";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return <div data-test="component-home">
    <h1>Guess the movie</h1>
    <button onClick={() => navigate("/game")}>Start</button>
  </div>;
};

export default Home;
