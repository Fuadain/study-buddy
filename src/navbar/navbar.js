import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav id="navbar">
               <NavLink to="/dashboard" id="logo"><FontAwesomeIcon icon="fa-solid fa-school" /></NavLink>
        </nav>
    )
}