import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Gmap from './Components/Gmap/Gmap';
import User from './Components/User/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/map" component={Gmap} />
        <Route path="/user" component={User} />
      </Switch>
    </div>
  );
}

export default App;
