import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import Main from './Components/Main/Main';
import Map from './Components/Map/Map';
import User from './Components/User/User';
import RegisterForm from './Components/Login/Registration/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/main" component={Main} />
        <Route path="/map" component={Map} />
        <Route path="/user" component={User} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
    </div>
  );
}

export default App;
