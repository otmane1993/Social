import React from 'react';
import Margin from './Margin';
import Contacts from './Contacts';
import Chat from './Chat';
import '../App.css';

function Main() {
    return (
        <div className="main">
            <Margin/>
            <Chat/>
            <Margin/>
        </div>
    )
}

export default Main
