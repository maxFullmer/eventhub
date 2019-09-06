
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
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
    this.fetchUserSession = this.fetchUserSession.bind(this);
  }

  fetchUserSession() {
    axios.get('/api/user_session').then(res => {
      console.log("response: ", res);
      this.setState({
        user: res.data,
      })
    })
  }
  render() {
    console.log("app state", this.state.user)
    return (
      <div className="App">
        <HamburgerMenu />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" render={(props) =>
            <LoginForm {...props} fetchUserSession={this.fetchUserSession} />
          } />
          <Route path="/register" component={RegisterForm} />
          <Route path="/user" render={(props) => {
            let authorized = localStorage.getItem('accredited')
            if (authorized === 'true') {
              return (
                <UserPage {...props} user={this.state.user} fetchUserSession={this.fetchUserSession} />
              )
            } else {
              return <LoginForm {...props} fetchUserSession={this.fetchUserSession} />
            }
          }} />
          <Route path="/main" component={MainPage} />
          <Route path='/userform' render={(props) => {
            let authorized = localStorage.getItem('accredited')
            if (authorized === 'true') {
              return (
                <NewEventForm {...props} user={this.state.user} fetchUserSession={this.fetchUserSession} />
              )
            } else {
              return <LoginForm {...props} fetchUserSession={this.fetchUserSession} />
            }
          }} />
          <Route path="/map" component={MapPage} />
        </Switch>
      </div>
    );
  }
}
export default App;