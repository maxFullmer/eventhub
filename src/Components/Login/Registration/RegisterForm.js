import React, { Component } from 'react';
import axios from 'axios';
import './RegisterForm.scss';

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: ''
        }
        this.register = this.register.bind(this);
        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }


    register(e) {
        // e.preventDefault();
        const { userName, email, password } = this.state;
        axios.post('/api/register', {
            "userName": userName,
            "email": email,
            "password": password
        })
            .then(res => {
                this.props.setUser(res.data)
            });
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { userName, email, password } = this.state;

        const titleStyle = {
            fontFamily: "'Lato', sans- serif",
            textTransform: 'uppercase',
            color: 'rgb(211, 211, 211)',
            fontSize: '40px',
            fontWeight: 700,
            letterSpacing: '3px',
            marginLeft: '37%'
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
            fontSize: '28px',
            fontWeight: 600,
            fontFamily: "'Lato', sans- serif",
            textTransform: 'uppercase',
            borderRadius: '10rem',
            width: '55%',
            height: '60px',
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
            <div id="register-page">
                <div className="col-lg-6 mx-auto">
                    <div id="register-card" className="card">
                        <div className="card-header">
                            <h4 style={titleStyle}>Register</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group-lg">
                                <label className="userName-label" for="email" style={subTitleStyle}>Username:</label>
                                <input style={emailInputStyle} type="text" className="form-control" onChange={(e) => this.universalChangeHandler('userName', e.target.value)} value={userName} />
                            </div>
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
                            <input type="Submit" onClick={() => this.register()} className="btn btn-block" style={buttonStyle} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default RegisterForm;