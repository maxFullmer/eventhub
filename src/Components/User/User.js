import React, { Component } from 'react';
import UserEventsForm from './UserEventsForm';
import './User.scss';

class User extends Component {
    render() {
        return (
            <div>
                <UserEventsForm />
            </div>
        )
    }
}

export default User;