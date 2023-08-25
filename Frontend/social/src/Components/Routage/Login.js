import React from 'react'

function Login() {
    return (
        <div className="login">
            Login
            <form className="form">
                <div className="form-group">
                    <label for="firstname">Firstname:</label>
                    <input id="firstname" name="firstname" type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label for="lastname">Lastname:</label>
                    <input id="lastname" name="lastname" type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <input type="submit" value="submit" className="form-control btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default Login
