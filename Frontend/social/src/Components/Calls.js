import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Calls(){
    return (
        <div className="calls">
            <button className="btn-profile">
                <FontAwesomeIcon icon={faVideo} style={{color:"blue"}}/>
                <span> Call</span>
            </button>
            <button className="btn-profile">
                <FontAwesomeIcon icon={faVideo} style={{color:"blue"}}/>
                <span> Video</span>  
            </button>
        </div>
    )
}
export default Calls
