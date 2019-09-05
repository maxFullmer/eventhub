import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const Landing = () => {
  return (
    <div className="landing-page">

      <header className="landing-header">

        <div className="landing-header_text-box">
          <div className="landing-header-container">
          <h1 className="landing-heading-primary">
            <span className="landing-heading-primary--main">Eventhub</span>
            <span className="landing-heading-primary--sub">Search, Find, Attend. It's that easy...</span>
          </h1>
          </div>
          <div className="landing-button-container">
          <Link to='/login' id="landing-button-1"><label>Login</label></Link>
          <Link to='/register' id="landing-button-2"><label>Register</label></Link>
          <Link to='/main' id="landing-button-3"><label>Continue As Guest</label></Link>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Landing;