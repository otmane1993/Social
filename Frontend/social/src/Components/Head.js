import React from 'react';
import '../App.css';

function Head() {
    return (
        <div className="head">
            <button className="souhait btn btn-primary">
                <i class="fa-regular fa-heart"></i>
            </button>
            <button className="view btn btn-danger">Change view</button>
            <button className="sign btn btn-success">Sign up</button>
            <button className="login btn btn-danger">Log in</button>
        </div>
    )
}

export default Head
