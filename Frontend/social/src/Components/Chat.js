import React, { useState, useContext, createContext } from 'react';
import '../App.css';
import Search from './Search';
import Messages from './Messages';
import Contacts from './Contacts';
import Parametrs from './Parametrs';
import emojiContext from './EmojiContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

function Chat(props) {
    //const emojiContext = createContext()
    //const [friend, setFriend] = useState({})
    const [color, setColor] = useState("")
    const [emoji, setEmoji] = useState(faSadTear)
    const handleColor = (data) =>{
        setColor(data)
    }
    const setfriend = (para) =>{
        //setFriend(para)
        props.friend(para)
    }
    return (
        <div className="chat">
            <Search friend={(para)=>{setfriend(para)}}/>
            <Contacts/>
            <emojiContext.Provider value = {emoji}>
                <Messages color={color}/>
            </emojiContext.Provider>
            <Parametrs color={handleColor} setEmoji={setEmoji}/>
        </div>
    )
}

export default Chat