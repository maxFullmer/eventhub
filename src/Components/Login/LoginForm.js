import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            email: ''
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
        const { user_name, email, password } = this.state;
        axios.post('/auth/login', { user_name: user_name, email: email, password: password })
            .then(res => {
                console.log(res);
                if (res.data.message) {
                    alert(res.data.message)
                } else {
                    this.props.setLoginUser(res.data.user);
                    this.props.history.push('/ProfilePage');
                }
            })
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    render() {
        const { user_name,
            email,
            password } = this.state;

        let styles = {
            background: 'linear-gradient(0deg, rgba(130, 130, 130, 1) 0%, rgba(226, 62, 62, 1) 100%)'
        };

        let style = {
            background: 'lightgray'
        };

        let titleTextStyles = {
            fontFamily: "'Quicksand', sans-serif",
            textDecoration: 'underline',
            fontSize: '32px',
            fontWeight: 700
        };

        let normalTextStyles = {
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '20px',
            fontWeight: 400
        };

        let loginStyles = {
            background: 'rgba(226,62,62,1)',
            marginTop: '5px',
            fontSize: '17px',
            fontWeight: 800,
            fontFamily: "'Quicksand', sans-serif"
        };

        let registerStyles = {
            background: 'rgb(190, 190, 190)',
            marginTop: '5px',
            fontSize: '17px',
            fontWeight: 800,
            fontFamily: "'Quicksand', sans-serif"
        };

        return (
            <div className='page' style={styles}>
                {/* <section id="actions" class="py-4 mb-4 bg-dark"> */}
                <div class="container" >
                    <div class="row"></div>
                </div>
                {/* </section> */}
                <section id="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card" style={style}>
                                    <div style={{}} className="card-header">
                                        <h4 style={titleTextStyles}>Account Login</h4>
                                    </div>
                                    <div className="card-body">

                                        <div className="form-group-small">
                                            <label for="username" style={normalTextStyles}>Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => this.universalChangeHandler('user_name', e.target.value)}
                                                value={user_name}
                                            />
                                        </div>
                                        <div className="form-group-small">
                                            <label for="email" style={normalTextStyles}>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                onChange={(e) => this.universalChangeHandler('email', e.target.value)}
                                                value={email}
                                            />
                                        </div>
                                        <div className="form-group-small">
                                            <label for="password" style={normalTextStyles}>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                onChange={(e) => this.universalChangeHandler('password', e.target.value)}
                                                value={password}
                                            />
                                        </div>
                                        <input type="Submit" value="Login" onClick={() => this.login()} className="btn btn-block" style={loginStyles} />

                                        <Link to='/Register'><button className='btn btn-block' style={registerStyles}> Register </button></Link>
                                    </div>
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