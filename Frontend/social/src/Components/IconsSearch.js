import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Person from '../Assets/Images/person.jpg';

function IconsSearch(){
    return (
        <div>
            <button>
                <FontAwesomeIcon icon={faMoon} />
            </button>
            <button>
                <FontAwesomeIcon icon={faCog} />
            </button>
            <button className="btn-search-person">
                <img src={Person} className="image-person"/>
            </button>
        </div>
    )
}

export default IconsSearch
