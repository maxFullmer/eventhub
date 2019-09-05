import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HamburgerMenu from './Components/Hamburger/HamburgerMenu';
import LandingPage from './Components/Landing/LandingPage';
import MainPage from './Components/Main/MainPage';
import MapPage from './Components/Map/MapPage'
import UserPage from './Components/User/UserPage'
import NewEventForm from './Components/User/NewEventForm';
import RegisterForm from './Components/Login/Registration/RegisterForm';
import LoginForm from './Components/Login/LoginForm';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <HamburgerMenu />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/map" component={MapPage} />
        <PrivateRoute path="/user" component={UserPage} />
        <PrivateRoute path='/event' component={NewEventForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
