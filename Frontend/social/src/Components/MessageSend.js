import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import DynamicSizePara from './DynamicSizePara'

/*const dynamicSizePara = ({text, fontSize}) =>{
    const [size, setSize] = useState({width:0,height:0})
    const paraRef = useRef(null)
}*/

function MessageSend(props){
    const [send, setSend] = useState([])
    const [prevSend, setPrevSend] = useState('')
    /*const widthPara = (data) =>{
        
    }
    const widthParaMes = {
        width:widthPara()
    }*/
    useEffect(()=>{
        if(props.send != ""){
            setPrevSend(props.send)
            setSend((prevSend) => [...prevSend, props.send])
        }
    },[props.send])
    console.log(props.send+" propsSend")
    console.log(prevSend+" previousSend")
    return (
        <div className="send">
            {
                //console.log(send[send.length-1]+"+return")
            }
            {
                send.map((message,index)=>{
                    return (<div key={index} style={{position:'relative'}}>
                        {
                        (typeof message == 'string')?
                        <>
                            <div className="send-para-container">
                                <p className="send-para" key={index}>{message}</p>
                            </div>
                            {/*<dynamicSizePara text={message} fontSize="16"/>*/}
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