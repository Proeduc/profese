import React, { useState } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Login.css'

function Login() {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const history = useHistory()

    const handleClick = (e) => {
        e.preventDefault()

        // post request 

        // if response get then redirect
        history.push('./')
    }
    return (
        <>
        <div className="login">
           <div className="login_text">
                <h1>Welcome back!</h1>
                <p>By logging into profese, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
           </div>

           <div className="login_input">
                <div className="social_login">
                   <button>Continue with Google</button>
                   <button>Continue with Facebook</button>
                </div>

                <div className="manual_login">
                    <label htmlFor="username">Email or Username</label>
                    <input 
                       type="text"
                       name="username"
                       id="username"
                       value={Name}
                       onChange={(e) => {setName(e.target.value)}}
                        />

                    
                    <label htmlFor="password">Password</label>
                    <input 
                       type="password"
                       name="password"
                       id="password"
                       value={Password}
                       onChange={(e) => {setPassword(e.target.value)}}
                        />

                    <label>Forgot Password?</label>
                    <button onClick={handleClick} className="login_btn">Log in</button>

                    <NavLink to="/signup">Create an account</NavLink>
                </div>
           </div>
        </div>

        <Footer />
    </>
    )
}

export default Login
