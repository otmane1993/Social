import React,{ useState, useContext, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faHeart, faLaugh, faThumbsUp, faStar, faCheck, faFrown, faMeh, faAngry, faSadTear, faSurprise, faHandPeace } from '@fortawesome/free-solid-svg-icons';

function Emojis(props){
    const [emojisDisplay, setEmojisDisplay] = useState(false)
    const [activeEmoji, setActiveEmoji] = useState(faSadTear)
    const [emojis, setEmojis] = useState([faSmile,faHeart,faLaugh,faThumbsUp,faStar,faCheck,faFrown,faMeh,faAngry,faSadTear,faSurprise,faHandPeace])
    const handleEmojis = () =>{
        setEmojisDisplay(!emojisDisplay)
    }
    const handleEmoji = (icon) =>{
        setActiveEmoji(icon)
        props.setEmoji(icon)
    }
    return (
        <>
            <div className="change-emoji">
                <span>Change emoji</span>
                <FontAwesomeIcon icon={activeEmoji} style={{color:"gray",border:"black",fontSize:"20px"}} onClick={handleEmojis}/>
            </div>
            {
                (emojisDisplay)?
                <div className="emojis">
                    {
                        emojis.map((emoji, index)=>{
                            return (<div className="emojis-emoji-container">
                                <FontAwesomeIcon className="emoji" key={index} icon={emoji} onClick={()=>{handleEmoji(emoji)}}/>
                            </div>)
                        })
                    }
                </div>:""
            }
        </>
    )
}

export default Emojis
