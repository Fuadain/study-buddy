import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
    return (
        <div>
        <nav id="sidebar">
                <ul>
                    <li><h2 id="sidebar-welcome">Welcome Student!</h2></li>
                    <li><NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/account" id="sidebar-profile" className="sidebar-option" activeClassName="active">Account</NavLink></li>
                    <li><NavLink to="/logout" id="sidebar-logout" className="sidebar-option" activeClassName="active">Logout</NavLink></li>
                </ul>
        </nav>
        </div>
    )
}