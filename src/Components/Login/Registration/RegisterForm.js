import React, { Component } from 'react';
import axios from 'axios';
import './RegisterForm.scss';

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.register = this.register.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }


    register(e) {
        e.preventDefault();
        const { username, email, password } = this.state;
        axios.post('/api/register', {
            username: username,
            email: email,
            password: password
        })
            .then(res => {
                this.props.history.push('/user')
            });
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { username, email, password } = this.state;

        return (
            <div id="register-page">
                <div className="register-box">
                    <h2>Register</h2>


                    <form className="register-form">

                        <p className="register-p">Username:</p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={(e) => this.universalChangeHandler('username', e.target.value)}
                            value={username}
                        />

                        <p className="register-p">Email:</p>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail Address"
                            onChange={(e) => this.universalChangeHandler('email', e.target.value)}
                            value={email}
                        />

                        <p className="register-p">Password:</p>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => this.universalChangeHandler('password', e.target.value)}
                            value={password}
                        />

                        <input
                            type="submit"
                            name="sbmt"
                            onClick={(e) => this.register(e)}
                            style={{ text: "rgb(142, 228, 175)", fontSize: "24px" }}
                        />
                    </form>
                </div>
            </div >
        );
    }
}
export default RegisterForm;