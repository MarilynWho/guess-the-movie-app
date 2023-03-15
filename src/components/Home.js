import React from "react";
import Soundtrack from "./Soundtrack";

const Home = () => {
  return <div data-test="component-home">
    <h1>Guess the movie</h1>
    <button onClick={Soundtrack}>Start</button>
    <Soundtrack />
  </div>;
};

export default Home;
