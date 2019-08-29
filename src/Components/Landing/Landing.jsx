 import React from 'react';
 import { Link } from 'react-router-dom';
 import './Landing.css';

const Landing = () => {
        return (
            <div className="Landing-Container">
                <body>
                    <header className="header">
                        <div className="text-box">
                            <h1 className="heading-primary">
                                <span className="heading-primary-main"> Eventhub </span>
                                <span className="heading-primary-sub"> Search, Find, Attend.</span>
                                <span className="heading-primary-sub2"> It's That Easy... </span>
                            </h1>
                            <Link to='/login' className="btn btn-login btn-animated"> Login </Link>
                            <Link to='/register' className="btn btn-register btn-animated"> Register </Link>
                            <Link to='/main' className="btn btn-guest btn-animated"> Continue As Guest </Link>
                        </div>
                    </header>
                </body>
            </div>
        );
    }
export default Landing;