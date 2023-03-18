import React from "react";

const Form = (props) => {


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name here" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default Form;

localStorage.setItem("newBestScore", newBestScore);