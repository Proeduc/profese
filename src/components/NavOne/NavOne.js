import React, { useState } from 'react'
import './NavOne.css'
import {NavLink} from 'react-router-dom'

export default function NavOne() {
    const [Search, setSearch] = useState("")

    return (
        <div className="navone">
            <div className="navone_content">
                <div className="navone_icons">
                   <NavLink to="#" target="_blank"><i className="fa fa-twitter"></i></NavLink>
                   <NavLink to="#" target="_blank"><i className="fa fa-facebook-f"></i></NavLink>
                   <NavLink to="#" target="_blank"><i className="fa fa-instagram"></i></NavLink>
                </div>
                
                <div className="navone_links">
                    <NavLink className="link" to="/">REVIEWS</NavLink>
                    <NavLink className="link" to="/">BLOG</NavLink>
                    <NavLink className="link" to="/">DISCUSSION BOARD</NavLink>
                </div>
            </div>
            <div className="navone_search">
                <NavLink to="#" target="_blank"><i className="fa fa-user"></i></NavLink>

                <input 
                   type="text"
                   className="navone_searchbar"
                   placeholder="Search.."
                   value ={Search}
                   onChange={(e) => {setSearch(e.target.value)}} />

                <button className="navone_button"><i className="fa fa-search"></i></button>
            </div>
        </div>  
    )
}

        