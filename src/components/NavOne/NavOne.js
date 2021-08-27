import React, { useState } from 'react'
import './NavOne.css'
import {NavLink} from 'react-router-dom'

export default function NavOne() {
    const [Search, setSearch] = useState("")

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink to="#"><i className="fa fa-linkedin"></i></NavLink></li>
                        <li><NavLink to="#"><i className="fa fa-whatsapp"></i></NavLink></li>
                        <li><NavLink to="#"><i className="fa fa-facebook-f"></i></NavLink></li>
                        <li><NavLink to="#"><i className="fa fa-instagram"></i></NavLink></li>
                    </ul>
                </div>

                <ul className="nav navbar-nav">
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="#">BLOGS</NavLink></li>
                    <li><NavLink to="#">DISCUSSION BOARD</NavLink></li>
                    <li><NavLink to="#">ASK A TUTOR</NavLink></li>
                    <li><NavLink to="/reviews">REVIEWS</NavLink></li>
                </ul>
            </div>
        </nav> 
    )
}

        