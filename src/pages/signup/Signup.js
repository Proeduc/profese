import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import './signup.css'
import { Link, useHistory } from 'react-router-dom'
import { db, auth, provider } from '../../firebase'

export default function Signup() {
  const [email, setemail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [birth_date, setbirth_date] = useState('')
  const [profile, setProfile] = useState('')
  const history = useHistory()

  const validate = () => {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (password.length < 8 || !regexp.test(String(email).toLowerCase()))
      return false
    else return true
  }
  const register = (e) => {
    e.preventDefault()

    // post request if validate is true

    if (validate()) {
      auth.createUserWithEmailAndPassword(email, password).then((cred) => {
        return db.collection('users').doc(cred.user.uid).set({
          email: email,
          id: cred.user.uid,
          birth_date: birth_date,
          profile: profile,
          name: name,
        })
      })
      // redirect to home page
      history.push('/profile')
    } else {
      alert('Wrong inputs')
    }
  }

  return (
    <>
      <div className="signup container">
        <div className="row">
          <div className="signup_text col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h1>ENHANCE YOUR LEARNING AND EXPERIENCE, ANYTIME, ANYWHERE</h1>
            <h4>
              Join profese to get 1-on-1 online help for courses and
              assignments.
            </h4>
            <h4>
              By logging into profese, you agree to our
              <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
            </h4>
          </div>
          <div className="signup_input col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <form>
              <div className="manual_signup container-fluid">
                <div className="signup_profile_choice">
                  <label htmlFor="profile">Join profese as a</label>
                  <div className="choices">
                    <input
                      type="radio"
                      name="profile"
                      id="student"
                      value="Student"
                      onChange={(e) => setProfile(e.target.value)}
                      required
                    />
                    <label htmlFor="student" style={{ color: 'black' }}>
                      {' '}
                      &nbsp; Student &nbsp;
                    </label>
                    <input
                      type="radio"
                      name="profile"
                      id="tutor"
                      value="Tutor"
                      onChange={(e) => setProfile(e.target.value)}
                    />
                    <label htmlFor="tutor" style={{ color: 'black' }}>
                      {' '}
                      &nbsp;Tutor
                    </label>
                  </div>
                </div>

                <label htmlFor="birth_date">What is your date of birth?</label>
                <input
                  type="date"
                  id="birth_date"
                  className="form-control"
                  value={birth_date}
                  onChange={(e) => {
                    setbirth_date(e.target.value)
                  }}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value)
                  }}
                  required
                />

                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  required
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
                  required
                />
                <button
                  onClick={register}
                  className="signup_btn btn btn-block btn-primary"
                >
                  Sign Up
                </button>

                <Link to="/login">Log In here</Link>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </>
  )
}
