import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Login.css';
import { db, auth, provider, providerFacebook } from '../../firebase';

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const logInGoogle = () => {
    //gmail popup
    auth
      .signInWithPopup(provider)
      .then((cred) => {
        //adding user to the database
        return db.collection('users').doc(cred.user.uid).set({
          name: cred.user.displayName,
          id: cred.user.uid,
        });
      })
      .catch((error) => alert(error.message));

    history.push('/');
  };

  const logInFacebook = () => {
    //facebook popup
    auth
      .signInWithPopup(providerFacebook)
      .then((cred) => {
        //adding user to the database
        return db.collection('users').doc(cred.user.uid).set({
          name: cred.user.displayName,
          id: cred.user.uid,
        });
      })
      .catch((error) => alert(error.message));

    history.push('/');
  };

  const logIn = (e) => {
    e.preventDefault();

    //request with email and password
    auth
      .signInWithEmailAndPassword(mail, password)
      .catch((error) => alert(error.message));

    // if response get then redirect
    history.push('./');
  };
  return (
    <>
      <div className="login">
        <div className="login_text">
          <h1>Welcome back!</h1>
          <p>
            By logging into profese, you agree to our{' '}
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a>
          </p>
        </div>

        <div className="login_input">
          <div className="social_login">
            <button onClick={logInGoogle}>Continue with Google</button>
            <button onClick={logInFacebook}>Continue with Facebook</button>
          </div>

          <div className="manual_login">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              name="username"
              id="username"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label>Forgot Password?</label>
            <button onClick={logIn} className="login_btn">
              Log in
            </button>

            <NavLink to="/signup">Create an account</NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
