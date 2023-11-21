import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'

function MessageSend(props){
    const [send, setSend] = useState([])
    const [prevSend, setPrevSend] = useState('')
    useEffect(()=>{
        if(props.send != ""){
            setPrevSend(props.send)
            setSend((prevSend) => [...prevSend, props.send])
        }
    },[props.send])
    return (
        <div className="send">
            {
                send.map((message,index)=>{
                    return (<div key={index} style={{position:'relative'}}>
                        {
                        (typeof message == 'string')?
                        <>
                            <div className="send-para-container">
                                <p className="send-para" key={index}>{message}</p>
                            </div>
                            <span className="send-seen">Message seen 3:30 pm</span>
                        </>
                        :
                        <>
                            <FontAwesomeIcon icon={message} className="emojisent"/>
                            <span className="send-seen">Message seen 3:30 pm</span>
                        </>
                        }
                    </div>)
                })
            }
        </div>
    )
}
export default MessageSend