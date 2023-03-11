import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <div>
        <nav id="navbar">
               <Link to="/dashboard" id="logo">Logo Here</Link>
        </nav>
        </div>
    )
}