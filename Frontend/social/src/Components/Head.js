import React, {useState, useEffect} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import Login from './Routage/Login';
import Signup from './Routage/Signup';
import NoPage from './Routage/NoPage';
import Main from './Main';
import logo from '../Assets/Images/head-logo.png'

function Head(){
    const navigate = useNavigate()
    const redirectToSignUp = () =>{
        navigate('/signup')
    }
    const redirectToLogin = () =>{
        navigate('/login')
    }
    const redirectToHome = () =>{
        navigate('/')
    }
    return (
        <div className="head">
            <div className="traits-container">
                <div className="trait-blanc"></div>
                <div className="trait-blanc"></div>
                <div className="trait-blanc"></div>
            </div>
            <div className="head-logo">
                <img src={logo} onClick={redirectToHome}/>
            </div>
            <div className="home-connexion">
                <button className="btn-signup" onClick={redirectToSignUp}>Sign up</button>
                <button className="btn-login btn btn-warning btn-lg" onClick={redirectToLogin}>Log in</button>
            </div>
        </div>
    )
}

export default Head
