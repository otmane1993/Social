import React, {useEffect, useState} from 'react'
import "../../App.css"
import axios from 'axios'

function Signup() {
    const [errors, setErrors] = useState({
        firstname:"",
        lastname:"",
        age:"",
        email:"",
        sex:""
    })
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        age:"",
        email:"",
        sex:"homme"
    })
    const handleChange = (event) =>{
        if(event.target.name == "firstname"){
            setData({...data,firstname:event.target.value})
        }
        else if(event.target.name == "lastname"){
            setData({...data,lastname:event.target.value})
        }
        else if(event.target.name == "age"){
            setData({...data,age:parseInt(event.target.value)})
        }
        else if(event.target.name == "email"){
            setData({...data,email:event.target.value})
        }
        else{
            setData({...data,sex:event.target.value})
        }
    }
    const handleSubmit = () =>{
        axios.post('api/signup',{data:data})
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="signup">
            Signup
            <form className="form" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="firstname">Firstname:</label>
                    <input id="firstname" name="firstname" type="text" className="form-control" onChange={handleChange}></input>
                    <p className="error">{errors.firstname}</p>
                </div>
                <div className="form-group">
                    <label for="lastname">Lastname:</label>
                    <input id="lastname" name="lastname" type="text" className="form-control" onChange={handleChange}></input>
                    <p className="error">{errors.lastname}</p>
                </div>
                <div className="form-group">
                    <label for="age">Age:</label>
                    <input id="age" name="age" type="number" step="1" min="14" max="84" className="form-control" onChange={handleChange}></input>
                    <p className="error">{errors.age}</p>
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="email" className="form-control" onChange={handleChange}></input>
                    <p className="error">{errors.email}</p>
                </div>
                <div className="form-group">
                    <label for="sex">Sex:</label>
                    <select value={data.sex} name="sex" onChange={handleChange} className="form-control">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <p className="error">{errors.sex}</p>
                </div>
                <div className="form-group">
                    <input type="submit" value="submit" className="form-control btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default Signup
