import React, { useState } from 'react'
import "../../App.css"
import logo from '../../Assets/Images/logo.png'
import { Link } from "react-router-dom"
import axios from 'axios'

function Forget(){ 
    const [data, setData] = useState({ // Le state data comporte l'email saisit par le user dans le formulaire
        email:""
    })
    const [error, setError] = useState("") // L'erreur apres soumission du formulaire si on obtient un echec
    const [isError, setIsError] = useState(false) // Le state qui indique si on a obtenu erreur apres avoir soumettre le formulaire et gere la bordure rouge de l'input
    const [isLoaded, setIsLoaded] = useState(false) // Le state qui gere le declenchement du loader apres la soumission du formulaire
    const handleEmail = (event) =>{
        setData({...data, email:event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()  // eliminer le comportement par default apres soumission du formulaire
        setIsLoaded(true) // Declencher le loading du spinner apres la soumission du formulaire
        axios.post('http://127.0.0.1:8000/api/forget',data)
        .then((response)=>{
            setIsError(false) // Mettre a jour le state pour empecher et enlever la bordure rouge de l'input
            setIsLoaded(false) // Arreter le loading du spinner apres succes de la requete
        })
        .catch((error)=>{
            setIsLoaded(false) // Arreter le loading du spinner apres succes de la requete
            setIsError(true)  // Mettre a jour le state isError pour declencher la bordure rouge de l'input
            if(typeof error.response.data.errors === "string"){ // Si l'erreur du backend correspond a l'email non disponible et non enregistre dans la base de donnees
                setError(error.response.data.errors) // Mettre a jour le state error selon le 1er type d'erreur reponse de backend
            }else{
                setError(error.response.data.errors.email[0])
            }
        })
    }
    return (
        <div className="forget">
            <div className="forget-header">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <h2>Password forgot</h2>
                <p>Did you forget your password? Put your password to connect to Talkie</p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className={`form-control ${(isError)? "input-error":""}`} placeholder="Put your email" onChange={handleEmail}/>
                </div>
                <div className="forget-error">
                    <p className="error">{error}</p>
                </div>
                <div className="form-group form-submit">
                    <input type="submit" value={(isLoaded)? "":"Identify you"} className="form-control btn btn-warning btn-forget btn-lg"/>
                    {isLoaded && <div className="loader"></div>} 
                </div>
            </form>
            <div className="did-you-remember">
                <p>Did you remember? <span id="login-link"><Link to="/login">Connect you!</Link></span></p>
            </div>
        </div>
    )
}

export default Forget
