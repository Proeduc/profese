/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
 import { useEffect, useState } from 'react'
import './App.css'
import NavOne from './components/NavOne/NavOne' 
import Responsive_nav from './components/Responsive_nav/Responsive_nav'
import Home from './components/Home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import { Switch, Route } from 'react-router-dom'
import Profile from './pages/profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, login, logout } from './features/userSlice'
import { db, auth } from './firebase'
import Settings from './pages/settings/Settings'
import Reviews from './pages/reviews/Reviews'
import Discussion from './pages/discussion/Discussion'
import Ask_a_ques from './pages/discussion/Ask_a_ques'
import Custom from './pages/discussion/Custom'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [avatarUrl, setAvatarUrl] = useState('')
 
  const [width, setwidth] = useState(window.innerWidth)

  // for handling responsive navbar
  const handleWidth = () =>{
    setwidth(window.innerWidth)
    // console.log(width)
  }
  window.addEventListener('resize', handleWidth)

  console.log(user)
  useEffect(() => {
    db.collection('users')
      .doc(user?.uid)
      .collection('data')
      .doc('data')
      .get()
      .then((doc) => {
        if (doc.exists) {
          setAvatarUrl(`${doc.data().avatarUrl}`)
        }
      })
  }, [user?.uid])

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          }),
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  // console.log(avatarUrl)
  // if user logged in as auth changed
 

  return (
    <div className="App">
      {
        width > 650 ? 
        <NavOne /> :  <Responsive_nav />
      }
      <Switch>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile avatarUrl={avatarUrl} />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/discussion">
          <Discussion />
        </Route>
        <Route exact path="/ask_a_ques">
          <Ask_a_ques  />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/custom/:id">
          <Custom/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
