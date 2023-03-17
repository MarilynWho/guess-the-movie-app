import React from "react";

const Scores = () => {
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
      <button className="button">Back Home</button>
    </div>
  );
};

export default Scores;


