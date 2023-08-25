import React, { useState, useRef } from 'react'
import { faMagnifyingGlass, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Emojis from './Emojis';
import "../App.css"

function ProfileOptions(props){
    const [colors, setColors] = useState(["red","orange","blue","green"])
    const [activeBtn, setActiveBtn] = useState(localStorage.getItem("color"))
    const handleClick = (event) =>{
        let color = event.target.style.backgroundColor
        props.color(color)
        if(color != ""){
           setActiveBtn(color) 
        }
    }
    return (
        <div className="profile-options">
            <div className="input-profile-options">
                <input type="text" placeholder="Search in conversation"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="change-color">
                <span>ChangeColor</span>
                <div className="colors">
                    {
                        colors.map((color,index)=>{
                             return (<div key={index} className="circle-color" style={{backgroundColor:`${color}`}} onClick={handleClick}>
                                <FontAwesomeIcon icon={faCheck} style={{color: "white"}} className={((activeBtn == color)? "active":"")+" checked "+`Checked${color}`}/>
                             </div>)
                        })
                    }
                </div>
            </div>
            <Emojis setEmoji={props.setEmoji}/>
        </div>
    )
}
export default ProfileOptions