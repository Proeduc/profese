import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import './Login.css'
import { db, auth, firebase, provider, providerFacebook } from '../../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Login() {
  const user = useSelector(selectUser)
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState([])

  const logInGoogle = () => {
    //gmail popup
    setLoading(true)
    auth
      .signInWithPopup(provider)
      .then((cred) => {
        //adding user to the database
        return db
          .collection('users')
          .doc(cred.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return db.collection('users').doc(cred.user.uid).update({
                name: cred.user.displayName,
                id: cred.user.uid,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                newUser: cred.additionalUserInfo.isNewUser,
              })
            } else {
              return db.collection('users').doc(cred.user.uid).set({
                name: cred.user.displayName,
                id: cred.user.uid,
                newUser: cred.additionalUserInfo.isNewUser,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              })
            }
          })
      })
      .catch((error) => alert(error.message))

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoading(false)
      }
    })
    if (loading === false) {
      history.push('/profile')
    }
  }

  const logInFacebook = () => {
    //facebook popup
    auth
      .signInWithPopup(providerFacebook)
      .then((cred) => {
        //adding user to the database
        return db
          .collection('users')
          .doc(cred.user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return db.collection('users').doc(cred.user.uid).update({
                name: cred.user.displayName,
                id: cred.user.uid,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                newUser: cred.additionalUserInfo.isNewUser,
              })
            } else {
              return db.collection('users').doc(cred.user.uid).set({
                name: cred.user.displayName,
                id: cred.user.uid,
                newUser: cred.additionalUserInfo.isNewUser,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              })
            }
          })
      })
      .catch((error) => alert(error.message))

    history.push('profile')
  }

  const logIn = (e) => {
    e.preventDefault()
    //request with email and password
    auth
      .signInWithEmailAndPassword(mail, password)
      .catch((error) => alert(error.message))
    // if response get then redirect
    history.push('/profile')
  }
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
              <button className="btn g_btn" onClick={logInGoogle}>
                Continue with Google
              </button>
              <button className="btn f_btn" onClick={logInFacebook}>
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
                onClick={logIn}
                className="login_btn btn btn-block btn-primary"
              >
                Log in
              </button>

              <NavLink to="/signup">Create an account</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
