import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Main from './Components/Main/Main';
import MapPage from './Components/MapPage/MapPage'
import User from './Components/User/User';
import RegisterForm from './Components/Login/Registration/RegisterForm';
// import Landing from './Components/Landing/Landing';
import LoginForm from './Components/Login/LoginForm';
// import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import './App.css';
// import { GOOGLE_MAPS_API_KEY } from '../.env';

// const WrappedMap = withScriptjs(withGoogleMap(Gmap));

// console.log(GOOGLE_MAPS_API_KEY)

function App() {
  return (
    <div className="App">
      {/* <HamburgerMenu /> */}
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/user" component={User} />
        <Route path="/main" component={Main} />
        <Route path="/map" component={MapPage} />
      </Switch>
    </div>
  );
}

export default App;
