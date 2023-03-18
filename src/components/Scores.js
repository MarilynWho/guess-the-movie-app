import React from "react";
import { useNavigate } from "react-router-dom";

const Scores = () => {
  const navigate = useNavigate();
  const bestScore = localStorage.getItem("newBestScore");

  function whatTitle() {
    let title;
    if (bestScore <= 2) {
      title = "Movie Geek";
    } else if (bestScore === 3 || 4) {
      title = "Film Nerd";
    } else {
      title = "Cinephile";
    };
    return title;
  }

  return (
    <div data-test="component-scores">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Your Title</th>
            <th scope="col">Your Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{whatTitle()}</td>
            <td>{bestScore}</td>
          </tr>
        </tbody>
      </table>
      <button className="button" onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default Scores;


