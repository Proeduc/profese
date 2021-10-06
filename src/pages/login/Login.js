import React, { useState } from 'react'
import { NavLink } from 'react-router-dom' 
import './Login.css' 

function Login() { 
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('') 
  return (
    <>
      <div className="login container">
        <div className="row">
          <div className="login_text col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h1>Welcome back!</h1>
            <h4>
              By logging into Profese you agree to our{' '}
              <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a>
            </h4>
          </div>
          <div className="login_input col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="social_login container-fluid">
              <button className="btn g_btn" >
                Continue with Google
              </button>
              <button className="btn f_btn">
                Continue with Facebook
              </button>
            </div>
            <div className="manual_login container-fluid">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value)
                }}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />

              <label>Forgot Password?</label>
              <button 
                className="login_btn btn btn-block btn-primary"
              >
                Log in
              </button>

              <NavLink to="/signup">Create an account</NavLink>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Login
