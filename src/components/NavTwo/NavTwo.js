import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavTwo.css'

export default function NavTwo() {
    return (
        <div className="navtwo">

            <div className="navtwo_section">

                <div className="navtwo_courses">
                    <button className="navtwo_dropdn">Courses</button>
                    <div className="dropdn-content">
                        {/* here we fetch data from backend and replace */}
                         <p>Mathematics: </p>
                         <NavLink to="/">Algebra</NavLink >
                         <NavLink to="/">Geometry</NavLink >
                         <NavLink to="/">Calculus</NavLink >
                    </div>
                </div>

                <div className="navtwo_services">
                    <NavLink className="link" to="/">Services</NavLink>
                </div>

                <div className="navtwo_careers">
                    <NavLink className="link" to="/">Careers at Profese</NavLink>
                </div>
            </div>

            <div className="navtwo_logo">
                <NavLink to="/">logo img</NavLink>
            </div>

            <div className="navtwo_section">
                <div className="navtwo_support">
                    <NavLink className="link" to="/">Support</NavLink>
                </div>
                <div className="navtwo_login">
                    <NavLink className="link" to="/login">Login</NavLink>
                </div>
                <div className="navtwo_signup">
                    <NavLink className="link" to="/signup">SignUp</NavLink>
                </div>
            </div>

        </div>
    )
}
