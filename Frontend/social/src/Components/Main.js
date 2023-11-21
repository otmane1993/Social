import React from 'react';
import Margin from './Margin';
import Contacts from './Contacts';
import Chat from './Chat';
import '../App.css';

function Main(props) {
    const setfriend = (para) =>{
        //setFriend(para)
        props.friend(para)
    }
    return (
        <div className="main">
            <Margin/>
            <Chat friend={(para)=>{setfriend(para)}}/>
            <Margin/>
        </div>
    )
}

export default Main
