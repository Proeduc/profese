import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavTwo.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { Link, useHistory } from 'react-router-dom'
import { auth, firebase } from '../../firebase'
import logo from './logo.png'

export default function NavTwo() {
  const user = useSelector(selectUser)
  const history = useHistory()

  const logOut = () => {
    auth.signOut()

    history.push('/')
  }

  return (
    <nav class="navbar navtwo">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <NavLink class="dropdown-toggle" data-toggle="dropdown" to="#">
              Courses &nbsp;<span className="caret"></span>
            </NavLink>
            <ul class="dropdown-menu">
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
            <NavLink to="#">Services</NavLink>
          </li>
          <li>
            <NavLink to="#">Careers at Profese</NavLink>
          </li>
          <li>
            <NavLink to="#">Ask a Tutor</NavLink>
          </li>
        </ul>

        <ul class="logo nav navbar-nav navbar-center">
          <li>
            <img
              class="img-responsive"
              style={{ height: '65px', width:'150px' }}
              src={logo}
              alt="logo"
            />
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <NavLink to="#">Support</NavLink>
          </li>
          {user ? (
            <li onClick={logOut}>
              <NavLink to="/login">Logout</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          <li>
            {user ? (
              <NavLink to="/profile">Profile</NavLink>
            ) : (
              <NavLink to="/signup">Signup</NavLink>
            )}
          </li>
          <li>{user && <NavLink to="/settings">Settings</NavLink>}</li>
        </ul>
      </div>
    </nav>
  )
}
