import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
    return (
        <nav id="sidebar">
                <ul>
                    <li><h2 id="sidebar-welcome">Welcome Student!</h2></li>
                    <li><NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/profile" id="sidebar-profile" className="sidebar-option" activeClassName="active">Profile</NavLink></li>
                    <li><NavLink to="/logout" id="sidebar-logout" className="sidebar-option" activeClassName="active">Logout</NavLink></li>
                </ul>
        </nav>
    )
}