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
            <ul>
            <li><h2 id="sidebar-welcome">Welcome {firstName}!</h2></li>
            <li><NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/profile" id="sidebar-profile" className="sidebar-option" activeClassName="active">Profile</NavLink></li>
            <li><NavLink to="/logout" id="sidebar-logout" className="sidebar-option" activeClassName="active">Logout</NavLink></li>
        </ul>
        )
    }

    function teacherSidebar(){
        return (
            <ul>
            <li><h2 id="sidebar-welcome">Welcome {firstName}!</h2></li>
            <li><NavLink to="/dashboard" id="sidebar-profile" className="sidebar-option" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/profile" id="sidebar-profile" className="sidebar-option" activeClassName="active">Profile</NavLink></li>
            <li><NavLink to="/logout" id="sidebar-logout" className="sidebar-option" activeClassName="active">Logout</NavLink></li>
        </ul>
        )
    }
    return (
        <nav id="sidebar">
        {isTeacher ? teacherSidebar() : studentSidebar()}
        </nav>
    )
}