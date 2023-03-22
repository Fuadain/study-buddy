import React from 'react';
import './navbar.css';

export default function Navbar(props){
    //dashboard account 

    return (
        <div id="navbar-container">
            <div id="navbar">
                <span>{props.pageName}</span>
            </div>
        </div>
    )
}
