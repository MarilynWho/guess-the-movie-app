import React, { useState, useEffect } from "react";
import Soundtrack from "./Soundtrack";
import { getQuestions, getQuestionData } from "../utils/lib";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Game = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] =  useState(0);

  //function to get bestScore from localStorage
  useEffect(() => {
    const bestScore = localStorage.getItem("newBestScore");
    if (bestScore) {
      setBestScore(bestScore);
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
      setQuestionData(questionData);
    });
    // this function will trigger when we change questions or questionIndex
  }, [questions, questionIndex]);

  // if question data is not loaded yet, show Loading
  if (!questionData) {
    return "loading...";
  }

  // checks if answer is correct
  function checkAnswer(index) {
    let answerMovieName;
    const newScore = score + 1;
    const newBestScore = Math.max(newScore, bestScore);

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
        setBestScore(newBestScore);
        //form here if they want it saved in local storage
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
      // go to try again page
      navigate("/try-again");
      // reset the score
      setScore(0);
      setBestScore(newBestScore);
      localStorage.setItem("newBestScore", newBestScore);
    }
  }

  return (
    <div data-test="component-game">
      <div className="bestScore">
        <p> score={score} </p>
        <p> bestScore={bestScore}</p>
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
