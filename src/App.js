import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Main from './Components/Main/Main';
import MapPage from './Components/MapPage/MapPage'
import UserForm from './Components/User/UserForm';
import User from './Components/User/User'
import RegisterForm from './Components/Login/Registration/RegisterForm';
import axios from 'axios'
import PrivateRoute from './Components/PrivateRoute';
// import Landing from './Components/Landing/Landing';
import LoginForm from './Components/Login/LoginForm';
// import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import './App.css';
// import { GOOGLE_MAPS_API_KEY } from '../.env';

// const WrappedMap = withScriptjs(withGoogleMap(Gmap));

// console.log(GOOGLE_MAPS_API_KEY)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
    this.fetchUserSession = this.fetchUserSession.bind(this);
}

  fetchUserSession(){
    axios.get('/api/user_session').then(res => {
      console.log("response: ", res);
      this.setState({
          user: res.data,
      })
  })
  }
  render(){
    console.log("app state", this.state.user)
  return (
    <div className="App">
      {/* <HamburgerMenu /> */}
      <Switch>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route path="/login" render={(props) => 
          <LoginForm {...props} fetchUserSession={this.fetchUserSession}/>
        } />
        <Route path="/register" component={RegisterForm} />
        <Route path="/user" render={(props) => {
            let authorized = localStorage.getItem('accredited')
            if(authorized === 'true'){
              return (
                <User {...props} user={this.state.user} fetchUserSession={this.fetchUserSession}/>
              )
            } else {
              return <LoginForm {...props} fetchUserSession={this.fetchUserSession}/>
            }
          } }/>
        <Route path="/main" component={Main} />
        <Route path='/userform'  render={(props) => {
            let authorized = localStorage.getItem('accredited')
            if(authorized === 'true'){
              return (
                <UserForm {...props} user={this.state.user} fetchUserSession={this.fetchUserSession}/>
              )
            } else {
              return <LoginForm {...props} fetchUserSession={this.fetchUserSession}/>
            }
          } }/>
        <Route path="/map" component={MapPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
