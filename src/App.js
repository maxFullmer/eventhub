import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Main from './Components/Main/Main';
import Map from './Components/Map/Map';
import User from './Components/User/User';
import RegisterForm from './Components/Login/Registration/RegisterForm';
import Landing from './Components/Landing/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/main" component={Main} />
        <Route path="/user" component={User} />
        <Route path="/map" component={Map} />
      </Switch>
    </div>
  );
}

export default App;
