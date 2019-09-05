import React, { Component } from 'react';
// import Search from './Search';
import './User.scss';
import UserForm from './UserForm';

class User extends Component {
    render() {
        return (
            <div>
                {/* <Search /> */}
                <UserForm />
            </div>
        )
    }
}

export default User;