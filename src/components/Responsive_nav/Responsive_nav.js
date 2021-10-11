import React from 'react'
import './Responsive_nav.css' 
import logo from '../NavTwo/logo.png'
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
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blog">Blogs</NavLink></li>
                <li><NavLink to="/discussion">Discussion Board</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
            </ul>

            <ul className="nav navbarOption navbar-nav">
            <li className="dropdown">
                <NavLink className="dropdown-toggle" data-toggle="dropdown" to="#">
                Courses &nbsp;<span className="caret"></span>
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink to="#">Mathematics</NavLink></li>
                    <li> <NavLink to="#">Science</NavLink></li>
                    <li><NavLink to="#">English</NavLink> </li>
                </ul>
            </li>
            <li>
                <NavLink to="#">Services</NavLink>
            </li>
            <li>
                <NavLink to="#">Careers at Profese</NavLink>
            </li>
            <li>
                <NavLink to="#">Ask a Tutor</NavLink>
            </li>
            </ul>
        </div>
        </>
    )
}
