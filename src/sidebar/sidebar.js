import React from 'react';
import './sidebar.css';

export default function Sidebar(){
    return (
        <nav id="sidebar">
                <ul>
                    <li><h2 id="sidebar-welcome">Welcome Student!</h2></li>
                    <li><a href="#" id="sidebar-profile" class="sidebar-option">Profile</a></li>
                    <li><a href="#" id="sidebar-logout" class="sidebar-option">Logout</a></li>
                </ul>
        </nav>
    )
}