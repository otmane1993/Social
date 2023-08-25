import React from 'react'
import Contact from './Contact'
import person from '../Assets/Images/person.jpg'
import person2 from '../Assets/Images/person2.jpeg'
import person3 from '../Assets/Images/person3.jpeg'
import person4 from '../Assets/Images/person4.jpeg'
//import Data from './Data'
import {useState} from 'react'

function Contacts() {
    //console.log(typeof(person))
    const [data, setData] = useState([
        {
            img:person,
            name:"Madison JONES",
            lastMessage:"What time was our meet",
            lastConnexion:20
        },
        {
            img:person2,
            name:"Yassine KAOUI",
            lastMessage:"How old are you",
            lastConnexion:30
        },
        {
            img:person3,
            name:"REDA RMILI",
            lastMessage:"What are you doing",
            lastConnexion:50
        },
        {
            img:person4,
            name:"Amal AIDI",
            lastMessage:"I miss you baby",
            lastConnexion:70
        }
    ])
    return (
        <div className="contacts">
            {
                data.map((item)=>{
                    return <Contact img={item.img} name={item.name} message={item.lastMessage} connexion={item.lastConnexion}/>
                })
            }
        </div>
    )
}

export default Contacts
