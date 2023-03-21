import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [userInput, setUserInput] = useState("");
  const userScore = props.score;

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("userScore", userScore);
    localStorage.setItem("userName", userInput);
  }
//   const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div className="form-group form">
          <input
            type="text"
            className="form-control"
            id="userName"
            aria-describedby="emailHelp"
            placeholder="Enter your name here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <div className="submit">
          <button
            type="submit"
            className="submit-btn"
            // onClick={() => navigate("/scores")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

