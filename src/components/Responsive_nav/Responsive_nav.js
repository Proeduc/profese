import React from 'react'
import './Responsive_nav.css' 
import logo from '../NavOne/logo.png'
import { NavLink } from 'react-router-dom'

export default function Responsive_nav() { 

    const openNav = () => { 
        document.getElementById('mySidenav').style.width = '100%' 
        document.getElementById('mySidenav').style.paddingLeft = '20px' 
    }

    const closeNav = () => { 
        document.getElementById('mySidenav').style.width = '0%' 
        document.getElementById('mySidenav').style.paddingLeft = '0px' 
    }

    return (
        <>
        <span style={{fontSize:"30px", cursor:"pointer"}} onClick={openNav}>&#9776; 
            <img
            style={{
                height: '55px',
                width: '150px',
                objectFit: 'contain',
                float:'right',
                marginBottom:'10px'
            }}
            src={logo}
            alt="logo"
            /> 
        </span>
         <div id="mySidenav" className="sidenav">
            <NavLink to="#" className="closebtn" onClick={closeNav}>&times;</NavLink> 
            <ul className="nav navbar-nav">
                <li><NavLink to="/" onClick={closeNav}>Home</NavLink></li>
                <li><NavLink to="/blog" onClick={closeNav}>Blogs</NavLink></li>
                <li><NavLink to="/discussion" onClick={closeNav}>Discussion Board</NavLink></li>
                <li><NavLink to="/reviews" onClick={closeNav}>Reviews</NavLink></li>
            </ul> 
            <ul className="nav navbarOption navbar-nav">
            <li>  
              <NavLink to="#" className=" service_dd dropdown-toggle" type="button" data-toggle="dropdown">Services <span className="caret"></span></NavLink>
              <ul className="dropdown-menu services__dropdown">
                <li><NavLink to="/assignment-help" onClick={closeNav}>Assignment Help</NavLink></li>
                <li><NavLink to="/live-sessions" onClick={closeNav}>One-on-One Live sessions</NavLink></li>
                <li><NavLink to="/course-help" onClick={closeNav}>Course Help</NavLink></li>
                <li><NavLink to="/practice-exam" onClick={closeNav}>Practice Exam</NavLink></li>
              </ul> 
            </li>
            <li>
                <NavLink to="#" onClick={closeNav}>Careers at Profese</NavLink>
            </li>
            <li>
                <NavLink to="#" onClick={closeNav}>Ask a Tutor</NavLink>
            </li>
            </ul>
        </div>
        </>
    )
}
