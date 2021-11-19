import React, { useState } from 'react'
import './NavOne.css'
import { Link, NavLink } from 'react-router-dom'
import NavTow from '../NavTwo/NavTwo'

export default function NavOne() { 

    return (
        <>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="https://www.linkedin.com/company/71097398/admin/" target="_blank"><i className="fa fa-linkedin"></i></a></li> 
                        <li><a href="https://www.facebook.com/profeseducation" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/invites/contact/?i=d4i696sm61vp&utm_content=i8mwrkz" target="_blank"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>

                <ul className="nav navbar-nav">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/blog">BLOGS</NavLink></li>
                    <li><NavLink to="/discussion">DISCUSSION BOARD</NavLink></li>
                    <li><NavLink to="/reviews">REVIEWS</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="#"><i className="fa fa-whatsapp" style={{color:"white"}}></i> +91 8299729830</NavLink></li>
                </ul>
            </div>
        </nav> 
        <NavTow />
        </>
    )
}
