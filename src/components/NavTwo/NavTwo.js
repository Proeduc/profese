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
          <li className="dropdown">
            <NavLink className="dropdown-toggle" data-toggle="dropdown" to="#">
              Courses &nbsp;<span className="caret"></span>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="#">Mathematics</NavLink>
              </li>
              <li>
                <NavLink to="#">Science</NavLink>
              </li>
              <li>
                <NavLink to="#">English</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink to="#">Careers at Profese</NavLink>
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
            {/* <li onClick={logOut}>
              <NavLink to="/login">Logout</NavLink>
            </li>  */}
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
