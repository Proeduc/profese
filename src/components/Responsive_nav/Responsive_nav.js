import React from 'react'
import './Responsive_nav.css' 
import logo from '../NavTwo/logo.png'

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
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a> 
            <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blogs</a></li>
                <li><a href="/discussion">Discussion Board</a></li>
                <li><a href="/reviews">Reviews</a></li>
            </ul>

            <ul className="nav navbarOption navbar-nav">
            <li className="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                Courses &nbsp;<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#">Mathematics</a></li>
                    <li> <a href="#">Science</a></li>
                    <li><a href="#">English</a> </li>
                </ul>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Careers at Profese</a>
            </li>
            <li>
                <a href="#">Ask a Tutor</a>
            </li>
            </ul>
        </div>
        </>
    )
}
