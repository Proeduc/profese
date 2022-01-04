import React, { useState } from 'react'
import './NavOne.css'
import { NavLink } from 'react-router-dom' 
import logo from './logo.png'

export default function NavOne() { 
   
    return (
        <>
        <nav className="navbar ">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="logo nav navbar-nav">
                        <li>
                            <img
                            style={{
                                height: '65px',
                                width: '150px',
                                objectFit: 'contain',
                                marginTop: '-5px',
                            }}
                            src={logo}
                            alt="logo"
                            />
                        </li>
                    </ul>
                </div>

                <ul className="nav navbar-nav">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/blog">BLOGS</NavLink></li>
                    <li><NavLink to="/discussion">DISCUSSION BOARD</NavLink></li>
                    <li><NavLink to="/reviews">REVIEWS</NavLink></li>
                    <li><NavLink to="/admin">ADMIN</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right"> 
                    <li>  
                        <NavLink to="#" className="dropdown-toggle" type="button" data-toggle="dropdown">Services <span className="caret"></span></NavLink>
                        <ul className="dropdown-menu services__dropdown">
                            <li><NavLink to="/assignment-help">Assignment Help</NavLink></li>
                            <li><NavLink to="/live-sessions">One-on-One Live sessions</NavLink></li>
                            <li><NavLink to="/course-help">Course Help</NavLink></li>
                            <li><NavLink to="/practice-exam">Practice Exam</NavLink></li>
                        </ul> 
                    </li>
                    {/* show profile link only when user is logged in */}
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ask-tutor">Ask a Tutor</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li> 
                </ul>
            </div>
        </nav>  
        </>
    )
}
