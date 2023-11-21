import React, { useState } from 'react';
import '../App.css';
import logo from "../Assets/Images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';


function ResultsFriend(props){
    const friend = props.friend
    const [isFriend, setIsFriend] = useState(false) // Le state qui gere l'affichage et le jonglache entre les boutons Friend et ajouter comme friend
    const [deleteFriend, setDeleteFriend] = useState(false) // Le state qui gere l'affichage ou le masquage de la section avec le bouton supprimer l'ami
    const handleFriend = () =>{
        //setIsFriend(true)
        setIsFriend(!isFriend)
        setDeleteFriend(false) // Mettre a jour le state pour masquer la section avec le bouton supprimer l'ami 
    }
    const handleDeleteFriend = () =>{
        setDeleteFriend(!deleteFriend) // Mettre a jour le state pour soit afficher ou masquer la section avec le bouton delete friend
    }
    return (
        <>
            <div className="results">
                <div className="picture-cover">
                    <img src={logo}/>
                </div>
                <div className="profile-footer">
                    <div className="picture-profile">
                        <img src={logo}/>
                    </div>
                    <div className="profile-data">
                        <h2 className="profile-name">{friend.firstname} {friend.lastname}</h2>
                        <p>{friend.nbrefriend} friends . 2 in common</p>
                    </div>
                    <div className="add-friend">
                        {
                            (isFriend)?
                            <>
                                <button className="btn btn-secondary" onClick={handleDeleteFriend}><FontAwesomeIcon icon={faUserGroup} />Friend</button>
                                {
                                    (deleteFriend)?
                                    <div className="delete-friend">
                                        <button className="btn-delete-friend" onClick={handleFriend}>Delete Friend</button>
                                    </div>:null
                                }
                            </>
                            :
                            <button className="btn btn-primary" onClick={handleFriend}><FontAwesomeIcon icon={faPlus} />Add Friend</button>
                        }
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ResultsFriend
