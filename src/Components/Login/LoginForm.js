import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className="login-form-card">
            <section id="login">
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form-1">
                            <h3>Login</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address" onChange="" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange="" value="" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" onClick="" value="Login" />
                            </div>
                            <div className="form-group">
                                <Link to="/main" className="btnGuest">Continue As Guest?</Link>
                            </div>
                        </div>
                        <div className="col-md-6 login-form-2">
                            <div className="login-logo">
                                <i className="fas fa-paper-plane"></i>
                            </div>
                            <h3>Register</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name" onChange="" value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name" onChange="" value="" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address" onChange="" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" onChange="" value="" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" onClick="" value="Register" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default LoginForm;

