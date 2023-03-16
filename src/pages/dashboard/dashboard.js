import React from 'react';
import './dashboard.css';
import Sidebar from '../../sidebar/sidebar.js';
 import Navbar from '../../navbar/navbar.js';
 import Account from '../account/account.js';

export default function Dashboard(){
    return (
        <div>
            <Navbar />
            <Sidebar />
        </div>
    )
}   