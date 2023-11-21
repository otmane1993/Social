import React, { useState } from 'react'

function HeadAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const logout = () =>{
        props.logout(isAuthenticated)
    }
    return (
        <>
            <p>Bonjour {props.data.firstname}</p>
            <button className="btn btn-danger" onClick={logout}>Log out</button>
        </>
    )
}

export default HeadAuth
