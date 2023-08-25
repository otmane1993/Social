import React from 'react';
import '../App.css';
import IconsSearch from './IconsSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search(){
    return (
        <div className="search">
            <FontAwesomeIcon icon={faTelegram} style={{color:'blue',fontSize:'2rem'}} className="telegram-icon"/>
            <div className="input-container">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
                <input type="text" placeholder="search..."/>
            </div>
            <IconsSearch/>
        </div>
    )
}

export default Search
