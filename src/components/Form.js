import React, { useState } from "react";

const Form = (props) => {
    const [userInput, setUserInput] = useState("")
    const userScore = props.score;
    let savedData;


    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem(userInput, userScore);
        savedData = window.localStorage.key(2)
        console.log(savedData);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter your name here" value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export const userInput = "";

export default Form;

