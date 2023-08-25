import React, { useState, useRef, useEffect } from 'react'
import SendBar from './SendBar'
import MessageSend from './MessageSend'
import MessageReiceved from './MessageReiceved'
import "../App.css"

function Messages(props){
    const [send, setSend] = useState("")
    const messagesRef = useRef(null)
    const scrollBarRef = useRef(null)
    const handleSend = (data) =>{
        setSend(data)
    }
    useEffect(()=>{
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight - messagesRef.current.clientHeight
        scrollBarRef.current.style.height = `${messagesRef.current.clientHeight}px`
        //console.log(messagesRef.current.scrollHeight)
    },[send])
    return (
        <div className="messages" ref={messagesRef}>
            <MessageSend send={send}/>
            <MessageReiceved color={props.color}/>
            <div className="scroll-bar" ref={scrollBarRef}></div>
            <SendBar send={handleSend}/>
        </div>
    )
}

export default Messages
