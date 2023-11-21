import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from "axios";
import IconsSearch from './IconsSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from "../Assets/Images/logo.png";
import ResultsFriend from './ResultsFriend';

function Search(props){
    const navigate = useNavigate()
    const [showUserSearch, setShowUserSearch] = useState(false) // Le state qui gere l'affichage de la barre des resultats de recherche selon le saisie dans le champ de recherche
    const [data, setData] = useState([])
    const handleChange = (event) =>{
        const searchValue = event.target.value  // La valeur saisie dans l'input et le champ de recherche des users
        if(searchValue){  // Si la valeur saisie dans le champ de recherche existe et non nulle
            setShowUserSearch(true)  // Mettre a jour le state d'affichage de la barre des resultats des profiles recherches
            axios.post('http://127.0.0.1:8000/api/search',{ // Envoyer une requette POST a la route de l'API qui retourne les resultats de recherche de profiles selon la valeur saisie dans le champ de recherche
                search:searchValue
            })
            .then((response)=>{  // En cas de succes de la requette POST
                setData(response.data) // Mettre a jour le state data avec les resultats de recherche renvoyes par l'API
            })
            .catch((error)=>{

            })
        }else{
            setShowUserSearch(false) // Mettre a jour le state pour desafficher la barre de resultats de recherche
        }
    }
    const redirectToFriendResults = (para) =>{
        navigate('/friends')
        props.friend(para)
    }
    return (
        <div className="search">
            <img src={logo} id="logo-search"/>
            <div className="input-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                <input type="text" name="search" placeholder="search..." onChange={handleChange}/>
                {showUserSearch && <div className="results-user-container">
                    <ul>
                        {
                            data.map((user)=>{  // boucler sur les resultats de recherche renvoyes par l'API pour les afficher dans la barre de resultats de recherche apres avoir saisit dans le champ de recherche
                                return <li className="user-item">
                                    <div className="user" onClick={()=>redirectToFriendResults(user)}>
                                        <img src={logo}/>
                                        <p>{user.firstname} {user.lastname}</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>}
            </div>
            <IconsSearch/>
        </div>
    )
}

export default Search
