import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import AxiosContext from '../components/axios-context';

export default function Sidebar(){
    const {userType} = React.useContext(AxiosContext)
    
    function studentSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome {userType}!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Account</li></NavLink>
            <NavLink to="/logout" id="sidebar-logout" className="sidebar-option-link"><li className="sidebar-option">Logout</li></NavLink>
        </ul>
        )
    }

    function teacherSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome {userType}!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Account</li></NavLink>
            <NavLink to="/logout" id="sidebar-logout" className="sidebar-option-link"><li className="sidebar-option">Logout</li></NavLink>
        </ul>
        )
    }
    return (
        <nav id="sidebar-container">
        {userType ? teacherSidebar() : studentSidebar()}               
        </nav>
    )
}