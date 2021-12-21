import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavTwo.css' 
import { Link, useHistory } from 'react-router-dom' 

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
            <NavLink to="/careers">Careers at Profese</NavLink>
          </li>
        </ul>

        

        <ul className="nav navbar-nav navbar-right">
          
          <li>
            <NavLink to="/">Support</NavLink>
          </li>   
        </ul>
      </div>
    </nav>
  )
}
