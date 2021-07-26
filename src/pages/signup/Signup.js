import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import './signup.css'
import {NavLink, useHistory} from 'react-router-dom'

export default function Signup() {
    const [email, setemail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [birth_date, setbirth_date] = useState("")
    const [Profile, setProfile] = useState("")
    const history = useHistory()
    

    const validate = () => {
       const mail_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
       
       if( birth_date === "" || email === "" || Password === "" || Profile === "" || Name === ""){
            alert("Empty fields not allowed....!!!")
            return false
        }
       else if(!mail_reg.test(email)){
            alert("Enter valid email...!!!")
            return false
       }
       else if(Password.length < 8){
            alert("Password length must be greater than 8...!!!")
            return false
       }
       else return true
    }

    const register = (e) => {
        e.preventDefault()
        validate() // for input validation 


        // post request if validate is true

        // redirect to home page
        history.push('./')
    }
    return (
        <>
        <div className="signup">
            <div className="signup_sec1">
                <h1>ENHANCE YOUR LEARNING AND EXPERIENCE, ANYTIME, ANYWHERE</h1>

                <p>Join profese to get 1-on-1 online help for courses and assignments.</p>
                <p>By logging into profese, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></p>
            </div>
       
            <div className="signup_sec2">
              <form onSubmit={register}>
                <div className="signup_profile_choice">
                    <label htmlFor="profile">Join profese as a</label>
                    <div className="choices">
                        <input 
                            type="radio"
                            name="profile"
                            id="student"
                            value="student"
                            onChange={(e) => {setProfile(e.target.value)}}/>
                        <label htmlFor="student"> &nbsp; Student &nbsp;</label>
                        <input 
                            type="radio"
                            name="profile"
                            id="tutor"
                            value="tutor"
                            onChange={(e) => {setProfile(e.target.value)}}/>
                        <label htmlFor="tutor"> &nbsp;Tutor</label>
                    </div>
                </div>

                <div className="signup_form">
                    <label htmlFor="birth_date">What is your date of birth?</label>
                    <input 
                        type="date" 
                        id="birth_date"
                        value={birth_date}
                        onChange={(e) => {setbirth_date(e.target.value)}} />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => {setemail(e.target.value)}} />

                    <label htmlFor="username">Username</label>
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
                        /><br/>
    
                    <button className="signup_btn">Sign Up</button>
                </div>
              </form>

                <NavLink to="/login">Already registered? Sign in</NavLink>
            </div>
        </div>
        <Footer/>
        </>
    )
}
