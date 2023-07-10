import React from 'react';
import './sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AxiosContext from '../components/axios-context';
import LoggingContext from '../components/logging-context';

export default function Sidebar(){
    const {userType} = React.useContext(AxiosContext)
    const {logout} = React.useContext(LoggingContext)
    const navigate = useNavigate()
    
    function logoutUser(){
        logout()
        navigate("/login")
    }

    function studentSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome Student!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Account</li></NavLink>
            <li className="sidebar-option sidebar-option-link" onClick={logoutUser}>Logout</li>
        </ul>
        )
    }

    function teacherSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome Teacher!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link"><li className="sidebar-option">Account</li></NavLink>
            <li className="sidebar-option sidebar-option-link" onClick={logoutUser}>Logout</li>
        </ul>
        )
    }
    return (
        <nav id="sidebar-container">
        {userType=="teacher" ? teacherSidebar() : studentSidebar()}               
        </nav>
    )
}