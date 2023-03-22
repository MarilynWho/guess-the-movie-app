import React from "react";
import { useNavigate } from "react-router-dom";

const Scores = (props) => {
  const navigate = useNavigate();
  const bestScore = localStorage.getItem("userScore")
  const savedName = localStorage.getItem("userName");

  function whatTitle() {
    let title;
    if (bestScore === null) {
      return;
    } else if (bestScore < 5) {
      title = "Movie Geek";
    } else if (10 > bestScore >5 ) {
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
            <th scope="col">Your Name</th>
            <th scope="col">Your Title</th>
            <th scope="col">Your Current Score</th>
            <th scope="col">Your Best Score</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <th scope="row"></th>
                <td>{savedName}</td>
                <td>{whatTitle()}</td>
                <td>{bestScore}</td>
                <td>{bestScore}</td>
              </tr>
        </tbody>
      </table>
      <button className="button" onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default Scores;


