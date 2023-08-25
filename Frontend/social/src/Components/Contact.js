import React from 'react'
import Person from '../Assets/Images/person.jpg'

function Contact({img,name,message,connexion}) {
    return (
        <div className="contact">
            <div className="image-contact">
                <img src={img} className="img-contact"/>
                <div className="isConnected"></div>
            </div>
            <div className="description-contact">
                <h3 className="contact-name">{name}</h3>
                <p className="contact-last-message">{message}</p>
            </div>
            <span className="contact-last-connexion">+{
                (connexion < 60)? connexion + "m" : Math.floor(connexion/60) + "h"
            }</span>
        </div>
    )
}

export default Contact
