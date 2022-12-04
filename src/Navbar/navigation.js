
import { useState } from "react";
import { BrowserRouter as Router,Route,Link, Routes } from "react-router-dom";
import Contact from "./contact";
import Home from "./home";
import Menu from "./menu";
import Profile from "./profile";
import { createContext } from "react";
import "./navbar.css"

export const AppContext=createContext();

export default function Navigation(){
    const[userName,setUserName]=useState("Chethan")

    return (
        <div className="navbar">
            <AppContext.Provider value={{userName,setUserName}}>
            <Router>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/contact" element={<Contact/>}/>
                    
            </Routes>

            </Router>
            </AppContext.Provider>
        
 
        </div>
    )
}