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

    componentDidMount() {
        axios.get('/auth/user_session').then(res => {
            console.log(res.data)
            this.props.setLoginUser(res.data)
        })
        console.log(this.props)
    }

    login(e) {
        // e.preventDefault();
        const { email, password } = this.state;
        axios.post('/api/login', { email: email, password: password })
            .then(res => {
                console.log(res);
                if (res.data.message) {
                    alert(res.data.message)
                } else {
                    // this.props.setLoginUser(res.data.user);
                    this.props.history.push('/user');
                    localStorage.setItem("accredited", "true")
                }
            })
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

        const titleStyle = {
            fontFamily: "'Lato', sans- serif",
            textTransform: 'uppercase',
            color: 'rgb(211, 211, 211)',
            fontSize: '40px',
            fontWeight: 700,
            letterSpacing: '3px',
            marginLeft: '35%'
        };

        const subTitleStyle = {
            fontFamily: "'Lato', sans- serif",
            fontSize: '28px',
            color: 'rgb(211, 211, 211)',
            marginBottom: '12px',
            marginTop: '14px',
            fontWeight: 700,
            letterSpacing: '1px',
            textTransform: 'uppercase'
        };

        const buttonStyle = {
            background: 'rgb(5, 56, 107)',
            color: 'whitesmoke',
            letterSpacing: '1px',
            fontSize: '22px',
            fontWeight: 600,
            fontFamily: "'Lato', sans- serif",
            textTransform: 'uppercase',
            borderRadius: '10rem',
            width: '50%',
            margin: '0 auto'
        };

        const inputStyle = {
            fontSize: '24px',
            marginBottom: '20px',
            backgroundColor: 'rgb(211, 211, 211)'
        }

        const emailInputStyle = {
            fontSize: '24px',
            fontFamily: "'Lato', sans- serif",
            backgroundColor: 'rgb(211, 211, 211)'
        }

        return (
            <div id="login-page">
                <div className="col-lg-6 mx-auto">
                    <div id="login-card" className="card">
                        <div className="card-header">
                            <h4 style={titleStyle}>User Login</h4>
                        </div>
                        <div className="card-body">

                            <div className="form-group-lg">
                                <label className="email-label" for="email" style={subTitleStyle}>Email:</label>
                                <input style={emailInputStyle}
                                    type="email"
                                    className="form-control"
                                    onChange={(e) => this.universalChangeHandler('email', e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="form-group-lg">
                                <label className="password-label" for="password" style={subTitleStyle}>Password:</label>
                                <input style={inputStyle}
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => this.universalChangeHandler('password', e.target.value)}
                                    value={password}
                                />
                            </div>
                            <input type="Submit" onClick={() => this.login()} className="btn btn-block" style={buttonStyle} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginForm;