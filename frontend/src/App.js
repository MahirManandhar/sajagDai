// import logo from './logo.svg';
import { useState } from "react";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Navbar1 from "./Components/Navbar";
import Navbar2 from "./Components/afterLoginNavbar";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import Loginhome from "./Components/LoginHome";
import AddPlace from "./Components/addPlace";
import DateCalculator from "./Components/planTrip";

// import axios from 'axios';

import { Login } from "./Components/Login";
import { Register } from "./Components/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHome from "./Components/LoginHome";
import PlanTrip from "./Components/planTrip";
// import ProfileScreen from "./Components/ProfileScreen";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [currentForm, setCurrentForm] = useState(
    localStorage.getItem("isLoggedIn")
      ? localStorage.getItem("isLoggedIn")
      : "home"
  );
  const toggleForm = (forName) => {
    if(forName==="home"){
     setCurrentForm("home");
     localStorage.removeItem("isLoggedIn");}
     else{
      setCurrentForm(forName);
      localStorage.setItem("isLoggedIn", forName);
     }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [result, setResult] = useState(null)
  const [modal,setmodal] = useState(false)
  const [data,setData] = useState(null)
  return (
    <>
      <div>
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        <Router>
          {currentForm === "home" ? (
            <Navbar1 mode={mode} toggleMode={toggleMode} setmodal={setmodal} />
          ) : (
            <Navbar2 mode={mode} onFormSwitch={toggleForm} toggleMode={toggleMode} />
          )}

          <Routes>

          { localStorage.getItem("isLoggedIn") ?(
            <Route path="/" element={<LoginHome />} />
          ): (
            <Route path="/" element={<Home modal={modal} setmodal={setmodal}/>} />
          ) }
            
            <Route path="/Home" element={<Home modal={modal} setmodal={setmodal}/>} />
            <Route path="/LoginHome" element={<Loginhome data={data} setData={setData} result={result} setResult={setResult}/>} />
            <Route
              path="/Login"
              element={<Login onFormSwitch={toggleForm} modal={modal} setmodal={setmodal} />}
            />
            <Route path="/addPlace" element={<AddPlace data={data} setData={setData}
       />}/>
             <Route path="/About" element={<PlanTrip />} />
            <Route path="/Register" element={<Register modal={modal} setmodal={setmodal} />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
