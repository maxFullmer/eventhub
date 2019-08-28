import React, { Component } from 'react'
import './UserEventsForm.scss';
import axios from 'axios';

class UserEventsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eventName: '',
            eventDate: '',
            description: '',
            address: {},
        }

        this.universalChangeHandler = this.universalChangeHandler.bind(this);
    }

    universalChangeHandler(property, value) {
        this.setState({
            [property]: value
        });
    }

    createEvent() {
        const { eventName, eventDate, description, address } = this.state;
        axios.post('//', {
            "eventName": eventName,
            "eventDate": eventDate,
            "description": description,
            "address": address,
        })
            .then(res => {
                this.props.setEvent(res.data)
            });
    }
    render() {
        const { eventName, eventDate, description, address } = this.state;
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
                                    <input type="text" className="form-control" placeholder="Event Name" onChange={(e) => this.universalChangeHandler('eventName', e.target.value)} value={eventName} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Event Date" onChange={(e) => this.universalChangeHandler('eventDate', e.target.value)} value={eventDate} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Description" onChange={(e) => this.universalChangeHandler('description', e.target.value)} value={description} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Address" onChange={(e) => this.universalChangeHandler('address', e.target.value)} value={address} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btnSubmit" onClick={() => this.createEvent()} value="Create Event" />
                                </div>
                            </div>
                        </div >
                    </div >
                </section >
            </div >
        );
    }
}

export default UserEventsForm;