import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withScriptjs, withGoogleMap } from 'react-google-maps'
// import Login from './Components/Login/Login';
import LoginForm from './Components/Login/LoginForm';
import Main from './Components/Main/Main';
import Gmap from './Components/Gmap/Gmap';
import User from './Components/User/User';
import RegisterForm from './Components/Login/Registration/RegisterForm';
import Landing from './Components/Landing/Landing';
import './App.css';
// import { GOOGLE_MAPS_API_KEY } from '../.env';

const WrappedMap = withScriptjs(withGoogleMap(Gmap));

// console.log(GOOGLE_MAPS_API_KEY)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/main" component={Main} />
        <Route path="/map" render={(props) => (
          <div id="wrapped-map-container">
            <WrappedMap 
                // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAPS_API_KEY}`}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places`}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
          </div>
        )} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
