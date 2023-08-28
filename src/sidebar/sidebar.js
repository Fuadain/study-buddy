import React from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
import AxiosContext from '../components/axios-context';
import LogoutContext from '../components/logout-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(){
    const {userType} = React.useContext(AxiosContext)
    const logout = React.useContext(LogoutContext)
    const [mobileSideBarView, toggleHamburgerContents] = React.useState(false);

    function studentSidebar(){
        return (
        <ul className="sidebar-list-container">
            <li>
                <h2 id="sidebar-welcome">
                    Welcome {userType}!
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
            <li className="sidebar-option" id="sidebar-logout" onClick={logout}>
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
                        Welcome {userType}!
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
            <li className="sidebar-option" id="sidebar-logout" onClick={logout}>
                <div className="sidebar-option-link">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='fontawesome-icon'/>
                    <span>Logout</span>
                </div>
            </li>
        </ul>
        )
    }


    function MobileSidebar(){
        return (
            <div className={`mobile-sidebar-container ${mobileSideBarView ? "mobile-menu-open" : "mobile-menu-closed"}`}>
                 <ul className="mobile-sidebar-list-container">
                    <li className='mobile-sidebar-welcome'>
                        <h2 id="sidebar-welcome">
                            Welcome {userType}!
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
                    <li className="sidebar-option" id="sidebar-logout" onClick={logout}>
                        <div className="sidebar-option-link">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className='fontawesome-icon'/>
                            <span>Logout</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }


    function toggleMobileSidebar(){
        toggleHamburgerContents((value) => {
           return value === true ? false : true
        }) 
        console.log(mobileSideBarView)
    }

    function Hamburger() {
        return (
            <>
            <div className='line line1'></div>
            <div className='line line2'></div>
            <div className='line line3'></div>
            </>
        )
    }
  

    return (
        <nav id="sidebar-container">
            {userType ? teacherSidebar() : studentSidebar()}   
            <div className="mobile-menu-toggle-button" onClick={toggleMobileSidebar}>
               <div className={`mobile-menu-toggle-button-content ${mobileSideBarView ? "mobile-icon-open" : "mobile-icon-closed"}`}> 
                 <Hamburger/>
                </div>
            </div>
            <MobileSidebar />
        </nav>
    )
}