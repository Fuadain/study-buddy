import React from 'react';
import './sidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AxiosContext from '../components/axios-context';
import LoggingContext from '../components/logging-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
            <li>
                <h2 id="sidebar-welcome">
                    Welcome Student
                </h2>
            </li>
            <li className="sidebar-option">
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link">
                <FontAwesomeIcon icon={faHouse} className='fontawesome-icon'/>
                <span>Home</span>
            </NavLink>
            </li>
            <li className="sidebar-option">
                <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link">
                    <FontAwesomeIcon icon={faUser} className='fontawesome-icon'/>
                    <span>Account</span>
                </NavLink>
            </li>
            <li className="sidebar-option" id="sidebar-logout" onClick={logoutUser}>
                <div className="sidebar-option-link">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='fontawesome-icon'/>
                    <span>Logout</span>
                </div>
            </li>
        </ul>
        )
    }

    function teacherSidebar(){
        return (
            <ul className="sidebar-list-container">
                <li>
                    <h2 id="sidebar-welcome">
                        Welcome Teacher
                    </h2>
                </li>
                <li className="sidebar-option">
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link">
                <FontAwesomeIcon icon={faHouse} className='fontawesome-icon'/>
                <span>Home</span>
            </NavLink>
            </li>
            <li className="sidebar-option">
                <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link">
                    <FontAwesomeIcon icon={faUser} className='fontawesome-icon'/>
                    <span>Account</span>
                </NavLink>
            </li>
            <li className="sidebar-option" id="sidebar-logout" onClick={logoutUser}>
                <div className="sidebar-option-link">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='fontawesome-icon'/>
                    <span>Logout</span>
                </div>
            </li>
        </ul>
        )
    }
    return (
        <nav id="sidebar-container">
            {userType==="teacher" ? teacherSidebar() : studentSidebar()}               
        </nav>
    )
}