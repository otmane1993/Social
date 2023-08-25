import React, { useState } from 'react'
import Friend from './Friend'
import Calls from './Calls'
import ProfileOptions from './ProfileOptions'

function Parametrs(props) {
    const handleColor = (data) =>{
        props.color(data)
    }
    return (
        <div className="parametrs">
            <Friend/>
            <Calls/>
            <ProfileOptions color={handleColor} setEmoji={props.setEmoji}/>
        </div>
    )
}
export default Parametrs
