import React, { useState, useEffect, CSSProperties } from "react";
import Soundtrack from "./Soundtrack";
import { getQuestions, getQuestionData } from "../utils/lib";
import { useNavigate } from "react-router-dom";

import PacmanLoader from "react-spinners/PacmanLoader";

const override: CSSProperties = {
  display: "block",
  margin: "35vh auto auto auto",
  borderColor: "red",
};

const Game = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const loading = true;
  let color = "#000000";

  //function to get bestScore from localStorage
  useEffect(() => {
    const bestScore = localStorage.getItem("newBestScore");
    if (bestScore) {
      setBestScore(bestScore);
    }
  }, []);

  //function to get current score from localStorage
  useEffect(() => {
    const score = Number(localStorage.getItem("currentScore"));
    if (!score) {
      return;
    } else {
      setScore(score);
    }
  }, []);

  // function to get all questions for the game
  // only loads once per game
  useEffect(() => {
    getQuestions().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  // function to load all the info about our pair of answers
  useEffect(() => {
    if (!questions) {
      return;
    }
    getQuestionData(questions[questionIndex]).then((questionData) => {
      if (questionData){
        setQuestionData(questionData);
      }
    });
    // this function will trigger when we change questions or questionIndex
  }, [questions, questionIndex]);

  // if question data is not loaded yet, show Loading
  if (!questionData) {
    return (
      <PacmanLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  // checks if answer is correct
  function checkAnswer(index) {
    let answerMovieName;
    const newScore = score + 1;
    const newBestScore = Math.max(score, bestScore);

    //function that saves data to local storage
    function saveBestScore(s) {
      localStorage.setItem("newBestScore", s);
    }
    //function that saves data to local storage after user plays
    // another game after well done.
    function saveScoreNow(s) {
      localStorage.setItem("currentScore", s);
    }

    console.log(questionIndex, questions.length);
    // gets name of the movie depending on poster we clicked
    if (index === 0) {
      answerMovieName = questionData.name1;
    } else {
      answerMovieName = questionData.name2;
    }
    // if answer is correct
    if (answerMovieName === questionData.correctAns) {
      // add score
      setScore(newScore);
      // if we don't have any more questions
      if (questionIndex === questions.length - 1) {
        setScore(newScore);
        setBestScore(newBestScore);
        //data gets saved to local storage
        saveBestScore(newBestScore);
        //daves the current score
        saveScoreNow(score);
        navigate("/well-done");
        // if we have more questions
      } else {
        // go to next set of movies to show
        setQuestionIndex(questionIndex + 1);
        // clear questions until we load new info
        setQuestionData(null);
      }
      // if the answer is wrong
    } else {
      //set bestcore as the higest score
      setBestScore(newBestScore);
      //bestscore is stored on local storage
      saveBestScore(newBestScore);
      //saves current score to local storage
      saveScoreNow(score);
      // reset the score
      setScore(0)
      // go to try again page
      navigate("/try-again");
    }
  }

  return (
    <div data-test="component-game">
      <div className="bestScore">
        <p>
          {" "}
          Score: {score} Best Score: {bestScore}
        </p>
      </div>
      {/* add posters */}
      <div className="poster">
        <img
          onClick={() => {
            checkAnswer(0);
          }}
          src={questionData.poster1}
          alt={questionData.name1}
          className="img-game"
        />
        <img
          onClick={() => {
            checkAnswer(1);
          }}
          src={questionData.poster2}
          alt={questionData.name2}
          className="img-game-two"
        />
      </div>
      <Soundtrack soundtrack={questionData.soundtrack} />

      <div className="game-btn">
        <button className="game" onClick={() => navigate("/")}>
          I am tired
        </button>
      </div>
    </div>
  );
};

export default Game;
