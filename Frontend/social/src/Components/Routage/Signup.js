import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../../App.css"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import logo from '../../Assets/Images/logo.png'

function Signup(){
    const navigate = useNavigate()
    const [showEyePassword, setShowEyePassword] = useState(true)
    const [showEyeConfirmed, setShowEyeConfirmed] = useState(true)
    const [isLoaded, setIsLoaded] = useState(false) // c'est un state boolean qui determine le loading du bouton de submit du formulaire d'inscription si il est true un spinner va tourner
    const [errors, setErrors] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmed:""
    })
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmed:""
    })
    const [isError, setIsError] = useState({ // state boolean qui rend les bordures des champs du formulaires rouges apres l'echec de l'inscription
        firstname:false,
        lastname:false,
        email:false,
        password:false,
        confirmed:false
    })
    const handleShowEyePassword = () =>{
        setShowEyePassword(!showEyePassword)
    }
    const handleShowEyeConfirmed = () =>{
        setShowEyeConfirmed(!showEyeConfirmed)
    }
    const redirectLogin = () =>{
        navigate('/login')
    }
    const handleChange = (event) =>{
        if(event.target.name == "firstname"){
            setData({...data,firstname:event.target.value})
        }
        else if(event.target.name == "lastname"){
            setData({...data,lastname:event.target.value})
        }
        else if(event.target.name == "email"){
            setData({...data,email:event.target.value})
        }
        else if(event.target.name == "password"){
            setData({...data,password:event.target.value})
        }
        else{
            setData({...data,confirmed:event.target.value})
        }
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        //setIsError({...isError, firstname:false, lastname:false, email:false, password:false, confirmed:false})
        setIsLoaded(true)
        axios.post('http://127.0.0.1:8000/api/inscription',data)
        .then((response)=>{
            setIsLoaded(false)
            setErrors({
                ...errors,
                firstname:"",
                lastname:"",
                email:"",
                password:"",
                confirmed:""
            })
            navigate('/login')
        })
        .catch((errores)=>{
            setIsLoaded(false) // Mettre a jour le state isLoaded pour arreter le loading du spinner dans le bouton de soumission du formulaire
            setIsError({...isError, firstname:false, lastname:false, email:false, password:false, confirmed:false}) // Mettre a jour le state isError en rendant tous les proprietes en false pour enlever la bordure rouge des champs du formulaire
            let firstError = errores.response.data.errors.firstname
            let lastError = errores.response.data.errors.lastname
            let emailError = errores.response.data.errors.email
            let passwordError = errores.response.data.errors.password
            let confirmedError = errores.response.data.errors.confirmed
            setErrors({
                ...errors,
                firstname:(firstError)? firstError[firstError.length-1]:"",
                lastname:(lastError)? lastError[lastError.length-1]:"",
                email:(emailError)? emailError[emailError.length-1]:"",
                password:(passwordError)? passwordError[passwordError.length-1]:"",
                confirmed:(confirmedError)? confirmedError[confirmedError.length-1]:"",
            })
            if(firstError != undefined){ // si Il y'a erreur ou plus dans le champ firstname du formulaire
                setIsError((prevIsError) => ({ ...prevIsError, firstname: true })) // mettre a jour la propriete firstname a true du state isError qui permet une bordure rouge du champ
            }
            if(lastError != undefined){ // si Il y'a erreur ou plus dans le champ lastname du formulaire
                setIsError((prevIsError) => ({ ...prevIsError, lastname: true })) // mettre a jour la propriete lastname a true du state isError qui permet une bordure rouge du champ
            }
            if(emailError != undefined){ // si Il y'a erreur ou plus dans le champ email du formulaire
                setIsError((prevIsError) => ({ ...prevIsError, email: true })) // mettre a jour la propriete email a true du state isError qui permet une bordure rouge du champ
            }
            if(passwordError != undefined){ // si Il y'a erreur ou plus dans le champ password du formulaire
                setIsError((prevIsError) => ({ ...prevIsError, password: true })) // mettre a jour la propriete password a true du state isError qui permet une bordure rouge du champ
            }
            if(confirmedError != undefined){ // si Il y'a erreur ou plus dans le champ confirmed du formulaire
                setIsError((prevIsError) => ({ ...prevIsError, confirmed: true })) // mettre a jour la propriete confirmed a true du state isError qui permet une bordure rouge du champ
            }
        })
    }
    return (
        <div className="signup">
            <div className="signup-header">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <h2>Welcome to TALKIE</h2>
                <p>Register in 3 minutes, and meet your best friends 💛</p>
            </div>
            <hr/>
            <form className="form" method="POST" action="/login" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="firstname" name="firstname" type="text" placeholder="Put your firstname" className={`form-control ${(isError.firstname)? "input-error":""}`} onChange={handleChange}></input>
                    <p className="error">{errors.firstname}</p>
                </div>
                <div className="form-group">
                    <input id="lastname" name="lastname" type="text" className={`form-control ${(isError.lastname)? "input-error":""}`} placeholder="Put your lastname" onChange={handleChange}></input>
                    <p className="error">{errors.lastname}</p>
                </div>
                <div className="form-group">
                    <input id="email" name="email" type="email" className={`form-control ${(isError.email)? "input-error":""}`} placeholder="Put your email" onChange={handleChange}></input>
                    <p className="error">{errors.email}</p>
                </div>
                <div className="form-group">
                    <div className="password">
                        {
                            (showEyePassword)?
                            <input type="password" name="password" id="password" className={`form-control ${(isError.password)? "input-error":""}`} placeholder="Put your password" onChange={handleChange}/>:
                            <input type="text" name="password" id="password" className={`form-control ${(isError.password)? "input-error":""}`} placeholder="Put your password" onChange={handleChange}/>
                        }
                        <div className="fa-eye" onClick={handleShowEyePassword}>
                            {
                                (showEyePassword)?
                                <FontAwesomeIcon icon={faEye}/>:
                                <FontAwesomeIcon icon={faEyeSlash}/>
                            }
                        </div>
                    </div>
                    <p className="error">{errors.password}</p>
                </div>
                <div className="form-group">
                    {
                        (showEyeConfirmed)?
                        <input type="password" name="confirmed" id="confirmed" className={`form-control ${(isError.confirmed)? "input-error":""}`} placeholder="Confirm your password" onChange={handleChange}/>:
                        <input type="text" name="confirmed" id="confirmed" className={`form-control ${(isError.confirmed)? "input-error":""}`} placeholder="Confirm your password" onChange={handleChange}/>
                    }
                    <div className="fa-eye" onClick={handleShowEyeConfirmed}>
                        {
                            (showEyeConfirmed)?
                            <FontAwesomeIcon icon={faEye}/>:
                            <FontAwesomeIcon icon={faEyeSlash}/>
                        }
                    </div>
                    <p className="error">{errors.confirmed}</p>
                </div>
                <div className="form-group form-submit">
                    <input type="submit" value={(isLoaded)?"":"Register"} className="form-control btn btn-warning btn-lg btn-load"/>
                    {isLoaded && <div className="loader"></div>}
                </div>
                <div className="form-group">
                    <p className="redirect-login" onClick={redirectLogin}>Connect to an existing account</p>
                </div>
            </form>
        </div>
    )
}

export default Signup
