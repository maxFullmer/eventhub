import React, { Component } from 'react';
import axios from 'axios';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.login = this.login.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }

    login(e) {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('/api/login', { email: email, password: password })
            .then((res) => {
                console.log("login form ", res.data)
                this.props.fetchUserSession(res.data)
                localStorage.setItem("accredited", "true")
                this.props.history.push('/user')
            }).catch(err => alert(err))
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const {
            email,
            password } = this.state;

        return (
            <div id="login-page">

                <div className="login-box">
                    <h2>Login</h2>

                    <form className="login-form">

                        <p className="login-p">E-mail Address:</p>
                        <input
                            type="email"
                            className="login-email"
                            placeholder="E-mail Address"
                            onChange={(e) => this.universalChangeHandler('email', e.target.value)}
                            value={email}
                        />

                        <p className="login-p">Password:</p>
                        <input
                            type="password"
                            className="login-password"
                            placeholder="Password"
                            onChange={(e) => this.universalChangeHandler('password', e.target.value)}
                            value={password}
                        />

                        <input
                            type="submit"
                            name="sbmt"
                            onClick={(e) => this.login(e)}
                            style={{ text: "rgb(142, 228, 175)", fontSize: "24px" }}
                        />

                    </form>
                </div>
            </div>

        );
    }
}
export default LoginForm;