import React from "react";
import { useNavigate } from "react-router-dom";

const Scores = (props) => {
  const navigate = useNavigate();
  const bestScore = localStorage.getItem("newBestScore")

  //sample scores to dipay in Scores.js
  const scoreData = [
    {
      name: "Nana",
      score: bestScore,
      title: whatTitle()
    },
    {
      name: "Jack",
      score: bestScore,
      title: whatTitle()
    },
  ]

  // function allStorage() {
  //   var archive = [],
  //     keys = Object.keys(localStorage),
  //     i = 2, key;

  //   for (; key = keys[i]; i++) {
  //     archive.push(key);
  //   }

  //   return archive;
  // }
  // const name = allStorage();
  // console.log(name);

  function whatTitle() {
    let title;
    if (bestScore === null) {
      return;
    } else if (bestScore === 1 || 2) {
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
            <th scope="col">Your Name</th>
            <th scope="col">Your Title</th>
            <th scope="col">Your Score</th>
          </tr>
        </thead>
        <tbody>
          {scoreData.map((val, key) => {
            return (
              <tr key={key}>
                <th scope="row"></th>
                <td>{val.name}</td>
                <td>{val.title}</td>
                <td>{val.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className="button" onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default Scores;


