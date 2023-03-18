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
  const [bestScore, setBestScore] = useState(0);

  //function to get bestScore from localStorage
  useEffect(() => {
    const bestScore = localStorage.getItem("newBestScore");
    if (bestScore) {
      setBestScore(bestScore);
    }
  }, []);

  // function to get data from OMDB
  useEffect(() => {
    getQuestions().then((questions) => {
      setQuestions(questions);
    });
  }, []);

  useEffect(() => {
    if (!questions) {
      return;
    }
    getQuestionData(questions[questionIndex]).then((questionData) => {
      setQuestionData(questionData);
    });
  }, [questions, questionIndex]);

  if (!questionData) {
    return "loading...";
  }

  function checkAnswer(index) {
    let answerMovieName;
    const newScore = score + 1;
    const newBestScore = Math.max(newScore, bestScore);

    console.log(questionIndex, questions.length);
    if (index === 0) {
      answerMovieName = questionData.name1;
    } else {
      answerMovieName = questionData.name2;
    }
    if (answerMovieName === questionData.correctAns) {
      setScore(newScore);
      if (questionIndex === questions.length - 1) {
        setBestScore(newBestScore);
        //form here if they want it saved in local storage
        navigate("/well-done");
      } else {
        setQuestionIndex(questionIndex + 1);
        setQuestionData(null);
      }
    } else {
      setScore(0);
      setBestScore(newBestScore);
      //form here if they want to save to local storage
      navigate("/try-again");
    }
  }

  return (
    <div data-test="component-game">
      <p> score={score} </p>
      <p> bestScore={bestScore}</p>
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
        <button className="game" onClick={() => navigate("/")}>I am tired</button>
      </div>
    </div>
  );
};

export default Game;
