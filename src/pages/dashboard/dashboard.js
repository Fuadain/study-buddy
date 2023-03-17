import React from 'react';
import './dashboard.css';
import Sidebar from '../../sidebar/sidebar.js';
 import Navbar from '../../navbar/navbar.js';

export default function Dashboard(){
    return (
        <div>
            <Navbar />
            <Sidebar />
        </div>
    )
}   