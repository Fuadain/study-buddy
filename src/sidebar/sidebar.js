import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
    const [isTeacher, identifyUser] = React.useState(false);
    const [firstName, inputFirstName] = React.useState("Student")

    React.useEffect(() => {
        isTeacher ? inputFirstName('Teacher') : inputFirstName('Student');
      }, [isTeacher]);

    function studentSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome {firstName}!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link" activeClassName="active"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link" activeClassName="active"><li className="sidebar-option">Account</li></NavLink>
            <NavLink to="/logout" id="sidebar-logout" className="sidebar-option-link" activeClassName="active"><li className="sidebar-option">Logout</li></NavLink>
        </ul>
        )
    }

    function teacherSidebar(){
        return (
            <ul className="sidebar-list-container">
            <li><h2 id="sidebar-welcome">Welcome {firstName}!</h2></li>
            <NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option-link" activeClassName="active"><li className="sidebar-option">Home</li></NavLink>
            <NavLink to="/account" id="sidebar-profile" className="sidebar-option-link" activeClassName="active"><li className="sidebar-option">Account</li></NavLink>
            <NavLink to="/logout" id="sidebar-logout" className="sidebar-option-link" activeClassName="active"><li className="sidebar-option">Logout</li></NavLink>
        </ul>
        )
    }
    return (
        <nav id="sidebar-container">
        {isTeacher ? teacherSidebar() : studentSidebar()}               
        </nav>
    )
}