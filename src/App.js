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
import Reviews from './pages/reviews/Reviews'
import Discussion from './pages/discussion/Discussion' 
import Blog from './pages/blog/Blog'
import ReviewFilter from './pages/reviews/ReviewFilter'
import Add_ans from './pages/discussion/Add_ans' 
// import Service from './pages/service/Service'

function App() { 
  const [avatarUrl, setAvatarUrl] = useState('')
 
  const [width, setwidth] = useState(window.innerWidth)

  // for handling responsive navbar
  const handleWidth = () =>{
    setwidth(window.innerWidth)
    // console.log(width)
  }
  window.addEventListener('resize', handleWidth)
 

  return (
    <div className="App">
      {
        width > 650 ? 
        <NavOne /> :  <Responsive_nav />
      }
      <Switch> 
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
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/review-filter">
          <ReviewFilter />
        </Route>
        <Route path="/add-ans">
          <Add_ans />
        </Route> 
        {/* <Route path="/service">
          <Service />
        </Route> */}
      </Switch>
    </div>
  )
}

export default App
