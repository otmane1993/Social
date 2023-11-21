import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './Components/Head';
import Main from './Components/Main';
import Layout from './Components/Routage/Layout';
import Login from './Components/Routage/Login';
import NoPage from './Components/Routage/NoPage';
import Signup from './Components/Routage/Signup';
import HeadAuth from './Components/HeadAuth';
import Home from './Components/Home';
import Forget from './Components/Routage/Forget';
import ResultsFriend from './Components/ResultsFriend';

function App(props){
  const [friend, setFriend] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  //const [mount, setMount] = useState(false)
  const mounter = (par) =>{
    setIsAuthenticated(par) // mettre a jour le state isAutenticated
  }
  const updateUser = (par) =>{
    setUser(par)
  }
  const logout = (para) =>{
    localStorage.removeItem("token")
    setIsAuthenticated(para)
    setUser({})  // supprimer le state du user authentifie apres la deconnexion 
  }
  const setfriend = (para) =>{
    setFriend(para)
  }
  return (
    <div className="App">
      <BrowserRouter>
        {(isAuthenticated)? <HeadAuth logout={(para)=>{logout(para)}} data={user}/>:<Head/>}
        <Routes>
          <Route path="/" element={(isAuthenticated)? <Main friend={(para)=>{setfriend(para)}}/>:<Home/>} />
          <Route path="/login" element={<Login mount={(par)=>{mounter(par)}} updateUser={(par)=>{updateUser(par)}}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/friends" element={<ResultsFriend friend={friend}/>}/>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
