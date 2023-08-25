import React, { useState,useEffect } from 'react'
import person from '../Assets/Images/person.jpg'

function MessageReiceved(props) {
    const [color, setColor] = useState("")
    useEffect(()=>{
        let color = props.color
        setColor(color)
        if(props.color != ""){
            localStorage.setItem("color",color)
        }
    },[props.color])
    return (
        <div className="reiceved">
            <div>
                <div className="text-received" style={{backgroundColor:`${localStorage.getItem("color")}`}}>
                    <p>Texte bien recu</p>
                </div>
                <span className="time-seen">Meessage seen 2:50 pm</span> 
            </div>
            <img src={person} className="img-received"/>
        </div>
    )
}

export default MessageReiceved
