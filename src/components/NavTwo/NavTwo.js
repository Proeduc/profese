import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavTwo.css' 
import { Link, useHistory } from 'react-router-dom' 
import logo from './logo.png'

export default function NavTwo() { 
  const history = useHistory()
  const logOut = () => { 

    history.push('/')
  }

  return (
    <nav className="navbar navtwo">
      <div className="container-fluid navbarTwoMobile">
        <ul className="nav navbarOption navbar-nav"> 
          <li>  
              <NavLink to="#" className="dropdown-toggle" type="button" data-toggle="dropdown">Services <span className="caret"></span></NavLink>
              <ul className="dropdown-menu services__dropdown">
                <li><NavLink to="/assignment-help">Assignment Help</NavLink></li>
                <li><NavLink to="/live-sessions">One-on-One Live sessions</NavLink></li>
                <li><NavLink to="/course-help">Course Help</NavLink></li>
                <li><NavLink to="/practice-exam">Practice Exam</NavLink></li>
              </ul> 
          </li>
          <li>
            <NavLink to="/careers">Careers at Profese</NavLink>
          </li>
          <li>
            <NavLink to="#">Ask a Tutor</NavLink>
          </li>
        </ul>

        <ul className="logo nav navbar-nav navbar-center">
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

        <ul className="nav navbar-nav navbar-right">
          <li>
            <NavLink to="#">Support</NavLink>
          </li>  
            <li>
              <NavLink to="/login">Login</NavLink>
            </li> 
          <li>  
              <NavLink to="/signup">Signup</NavLink> 
          </li> 
        </ul>
      </div>
    </nav>
  )
}
