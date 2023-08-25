import React, {useState} from 'react'
import person from "../Assets/Images/person.jpg"
import "../App.css"

function Friend(){
    const [date, setDate] = useState("1 May 2020")
    const [name, setName] = useState("Madison JONES")
    return (
        <div className="friend">
            <img src={person} className="img-profile"/>
            <h2 className="name-profile">{name}</h2>
            <h3 className="date-friend">FriendShip added at, {date}</h3>
        </div>
    )
}

export default Friend
