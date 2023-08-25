import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from './Components/Head';
import Main from './Components/Main';
import Layout from './Components/Routage/Layout';
import Login from './Components/Routage/Login';
import NoPage from './Components/Routage/NoPage';
import Signup from './Components/Routage/Signup';

function App() {
  return (
    <div className="App">
      <Head/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
