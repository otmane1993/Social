import React,{ useState, useContext, createContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import Emojis from './Emojis'
import emojiContext from './EmojiContext'

function SendBar(props){
    const [send, setSend] = useState("")
    const emoji = useContext(emojiContext)
    const handleChange = (event) =>{
        setSend(event.target.value)
    }
    const handleKeyDown = (event) =>{
        if(event.keyCode == 13){
            props.send(send)
        }
    }
    const sendWithPaper = () =>{
        props.send(send)
    }
    const sendEmoji = () =>{
        setSend(emoji)
        props.send(emoji)
    }
    return (
        <div className="send-bar">
            <button>
                <FontAwesomeIcon icon={faVideo} className="emoji-send"/>
            </button>
            <button>
                <FontAwesomeIcon icon={faDownload} className="emoji-send"/>
            </button>
            <input type="text" className="form-control" placeholder="Type something there..........." onKeyDown={handleKeyDown} onChange={handleChange}/>
            <button onClick={sendWithPaper}>
                <FontAwesomeIcon onClick={sendWithPaper} className="emoji-send" icon={faPaperPlane} style={{color:'blue'}}/>
            </button>
            <button onClick={sendEmoji}>
                <FontAwesomeIcon icon={emoji} className="emoji-send" onClick={sendEmoji}/>
            </button>
        </div>
    )
}
export default SendBar