import './App.css';
import NavOne from './components/NavOne/NavOne';
import NavTwo from './components/NavTwo/NavTwo';
import Home from './components/Home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <NavOne />
       <NavTwo /> 
       <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route exact path="/signup">
              <Signup />
          </Route>
       </Switch>
    </div>
  );
}

export default App;
