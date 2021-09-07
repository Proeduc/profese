import { useEffect } from 'react';
import './App.css';
import NavOne from './components/NavOne/NavOne';
import NavTwo from './components/NavTwo/NavTwo';
import Home from './components/Home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import { Switch, Route } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { db, auth } from './firebase';
import Settings from './pages/settings/Settings';
import Reviews from './pages/reviews/Reviews';
import Discussion from './pages/discussion/Discussion';
import Ask_a_ques from './pages/discussion/Ask_a_ques';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(user);

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
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      <NavOne />
      <NavTwo />
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
          <Profile />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/discussion">
          <Discussion />
        </Route>
        <Route exact path="/ask_a_ques">
          <Ask_a_ques />
        </Route>
        <Route exact path="/settings">
          <Settings/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
