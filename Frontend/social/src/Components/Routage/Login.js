import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Assets/Images/logo.png'
import { Link } from "react-router-dom"
import "../../App.css"

function Login(props) {
    const navigate = useNavigate()
    const [rememberMe, setRememberMe] = useState(false)
    const [showEyePassword, setShowEyePassword] = useState(true)
    const [error, setError] = useState("")
    const [isLoaded, setIsLoaded] = useState(false) // Le state qui gere le loading du spinner lors de la soumission du formulaire d'inscription
    const [isError, setIsError] = useState(false) // Le state qui gere s'il y'a erreur lors de l'authentification et qui rend la bordure rouge des inputs du formulaire
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const handleShowEyePassword = () =>{
        setShowEyePassword(!showEyePassword)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setIsLoaded(true) // mettre a jour le state isLoaded pour declencher le loading du spinner
        if(rememberMe){  // Si la case RememberMe est coche
            localStorage.setItem("rememberedEmail", data.email) // Stocke dans localStorage email envoye
            localStorage.setItem("rememberedPassword", data.password) // Stocke dans localStorage mot de passe envoye
            localStorage.setItem("rememberMe",rememberMe)
        }else{
            localStorage.removeItem("rememberedEmail")  // si on decoche la case rememberMe et on envoie le formulaire on supprime l'email enregistre du localStorage
            localStorage.removeItem("rememberedPassword")  // si on decoche la case rememberMe et on envoie le formulaire on supprime le mot de passe enregistre du localStorage
            localStorage.removeItem("rememberMe")
        }
        axios.post('http://127.0.0.1:8000/api/login',data)
        .then((response)=>{   // En cas de succes de la requete HTTP qui request la route de l'API qui gere le login
            navigate('/')   // Se diriger vers la route '/' apres avoir soumettre le formulaire du login
            setIsError(false)
            setIsLoaded(false) // mettre a jour le state isLoaded pour arreter le loading du spinner apres le succes de soumission du formulaire
            localStorage.setItem("token",response.data.token) // Stocker token d'authentification dans localStorage
            props.mount(true)  // Envoyer le parametre true au props mount du component Login qui permet l'authentification du user
            props.updateUser(response.data.user)
        })
        .catch((error)=>{
            setError(error.response.data.error)
            setIsError(true)
            setIsLoaded(false) // mettre a jour le state isLoaded pour arreter le loading du spinner apres l'echec de soumission du formulaire
        })
    }
    const handleChangeEmail = (event) =>{
        setData({...data,email:event.target.value})
    }
    const handleChangePassword = (event) =>{
        setData({...data,password:event.target.value})
    }
    const forgetPassword = () =>{
        navigate('/forget')
    }
    const handleRememberMe = () =>{
        setRememberMe(!rememberMe)
    }
    useEffect(()=>{ // A chaque fois que le component Login est monte met a jour le state data aux email et password enregistre dans le localStorage
        const emailStored = localStorage.getItem("rememberedEmail") // L'email stocke dans le localStorage
        const passwordStored = localStorage.getItem("rememberedPassword")  // Le mot de passe stocke dans le localStorage
        const rememberMeStorage = localStorage.getItem("rememberMe")  // variable qui lit l'enregistrement de la checkbox de rappel des coordonnees (email et mot de passe) dans localStorage
        setData((prevData)=>({...prevData, email:emailStored})) // une fois qu'on monte le component Login on met a jour l'email a l'email stocke dans local storage
        setData((prevData)=>({...prevData, password:passwordStored})) // une fois qu'on monte le component Login on met a jour le mot de passe au mot de passe stocke dans local storage
        if(rememberMeStorage){  // une fois qu'on monte le composant Login si la checkbox est checke
            setRememberMe(rememberMeStorage)  // ca permet a la checkbox d'etre checke en true apres le montage et le chargement de la page 
        }else{
            setRememberMe(false) // ca permet a la checkbox de n'etre pas checke apres le montage et le chargement de la page
        }
    },[])
    return (
        <div className="login">
            <div className="signup-header">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <h2>Welcome to TALKIE</h2>
                <p>Connect or <Link to="/signup"><span id="register-link">register</span></Link> if it isn't done 😉</p>
            </div>
            <hr/>
            <form className="form" action="/" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="email" name="email" type="email" placeholder="Put your email" value={data.email} className={`form-control ${(isError)? "input-error":""}`} onChange={handleChangeEmail}></input>
                </div>
                <div className="form-group">
                    {
                        (showEyePassword)?
                        <input type="password" name="password" id="password" value={data.password} placeholder="Put your password" className={`form-control ${(isError)? "input-error":""}`} onChange={handleChangePassword}/>:
                        <input type="text" name="password" id="password" value={data.password} placeholder="Put your password" className={`form-control ${(isError)? "input-error":""}`} onChange={handleChangePassword}/>
                    }
                    <div className="fa-eye" onClick={handleShowEyePassword}>
                        {
                            (showEyePassword)?
                            <FontAwesomeIcon icon={faEye}/>:
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        }
                    </div>
                </div>
                <div className="login-error">
                    <p className="error">{error}</p>
                </div>
                <div className="form-group">
                    <input type="checkbox" name="remember" value="remember" checked={rememberMe} onChange={handleRememberMe}/>
                    <label for="remember">Remember me</label>
                </div>
                <div className="form-group form-submit">
                    <input type="submit" value={(isLoaded)? "":"Login"} className="form-control btn btn-warning btn-lg btn-load"/>
                    {isLoaded && <div className="loader"></div>}
                </div>
                <div className="form-group">
                    <p className="forget-password" onClick={forgetPassword}>I forget my password</p>
                </div>
            </form>
        </div>
    )
}

export default Login
