import React, { useState, useContext, createContext } from 'react';
import '../App.css';
import Search from './Search';
import Messages from './Messages';
import Contacts from './Contacts';
import Parametrs from './Parametrs';
import emojiContext from './EmojiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

function Chat() {
    //const emojiContext = createContext()
    const [color, setColor] = useState("")
    const [emoji, setEmoji] = useState(faSadTear)
    const handleColor = (data) =>{
        setColor(data)
    }
    return (
        <div className="chat">
            <Search/>
            <Contacts/>
            <emojiContext.Provider value = {emoji}>
                <Messages color={color}/>
            </emojiContext.Provider>
            <Parametrs color={handleColor} setEmoji={setEmoji}/>
        </div>
    )
}

export default Chat