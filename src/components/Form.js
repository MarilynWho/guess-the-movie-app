import React,{useState} from "react";

const Form = (props) => {
    const[userInput, setUserInput] = useState()

    const userScore = props.score
    
    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem(setUserInput(userInput),userScore);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="name" class="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter your name here" value={userInput}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Form;

// localStorage.setItem("newBestScore", newBestScore);