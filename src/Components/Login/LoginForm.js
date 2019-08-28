import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    // login(e) {
    //     // e.preventDefault();
    //     const { email, password } = this.state;
    //     axios.post('/auth/login', {
    //         "email": email,
    //         "password": password
    //     })
    //         .then(res => {
    //             console.log(res);
    //             if (res.data.message) {
    //                 alert(res.data.message)
    //             } else {
    //                 this.props.setLoginUser(res.data.user);
    //                 this.props.history.push('/main');
    //             }
    //         })
    // }


    render() {
        const { email, password } = this.state;
        return (
            <div className="login-form-card">
                <section id="login">
                    <div className="container login-container">
                        <div className="row">
                            <div className="col-md-6 login-form-1">
                                <div className="logo">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <h3>Login</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email Address" onChange={(e) => this.universalChangeHandler('email', e.target.value)} value={email} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.universalChangeHandler('password', e.target.value)} value={password} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btnSubmit" onClick={() => this.login()} value="Login" />
                                </div>
                                <div className="form-group">
                                    <Link to="/main" className="btnGuest">Continue As Guest</Link>
                                </div>
                                <div className="form-group">
                                    <Link to="/register" className="btnRegister">Register Here</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default LoginForm;