import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import AxiosContext from '../components/axios-context';
import LogoutContext from '../components/logout-context';

export default function Sidebar(){
    const {userType} = React.useContext(AxiosContext)
    const logout = React.useContext(LogoutContext)
    
    function studentSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome {userType}!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Account</li></NavLink>
            <li className="sidebar-option sidebar-option-link" onClick={logout}>Logout</li>
        </ul>
        )
    }

    function teacherSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome {userType}!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Account</li></NavLink>
            <li className="sidebar-option sidebar-option-link" onClick={logout}>Logout</li>
        </ul>
        )
    }
    return (
        <nav id="sidebar-container">
        {userType ? teacherSidebar() : studentSidebar()}               
        </nav>
    )
}