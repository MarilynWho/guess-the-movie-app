import React, { useState, useEffect } from "react";
import Soundtrack from "./Soundtrack";
import { getQuestions, getQuestionData } from "../utils/lib";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

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
    console.log(questionIndex, questions.length);
    if (index === 0) {
      answerMovieName = questionData.name1;
    } else {
      answerMovieName = questionData.name2;
    }
    if (answerMovieName === questionData.correctAns) {
      if (questionIndex === questions.length - 1) {
        navigate("/well-done");
      } else {
        setQuestionIndex(questionIndex + 1);
        setQuestionData(null);
      }
    } else {
      navigate("/try-again");
    }
  }

  return (
    <div data-test="component-game">
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
        <button className="game">I am tired</button>
      </div>
    </div>
  );
};

export default Game;
