import React, { Component } from 'react';
// import axios from 'axios';
import './RegisterForm.scss';

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
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

    // register() {
    //     const { firstName, lastName, email, password } = this.state;
    //     axios.post('/api/register', {
    //         "email": email,
    //         "password": password,
    //         "firstName": firstName,
    //         "lastName": lastName
    //     })
    //         .then(res => {
    //             this.props.setUser(res.data)
    //         });
    // }

    render() {
        const { firstName, lastName, email, password } = this.state
        return (
            <div className="register-card-form">
                <section id="register">
                    <div className="container register-container">
                        <div className="row">
                            <div className="col-md-6 register-form">
                                <div className="logo">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <h3>Register</h3>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => this.universalChangeHandler('firstName', e.target.value)} value={firstName} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => this.universalChangeHandler('lastName', e.target.value)} value={lastName} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email Address" onChange={(e) => this.universalChangeHandler('email', e.target.value)} value={email} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => this.universalChangeHandler('password', e.target.value)} value={password} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btnSubmit" onClick={() => this.register()} value="Register" />
                                </div>
                            </div>
                        </div >
                    </div >
                </section >
            </div >
        );
    }
}
export default RegisterForm;