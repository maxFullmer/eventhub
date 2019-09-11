import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UserPage.scss';
import EventsList from '../Map/EventsList/EventsList'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            loading: true
        }
        this.getUserEvents = this.getUserEvents.bind(this);
        this.getUserSession = this.getUserSession.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserSession()
        this.setState({
            loading: false
        })
        // this.getUserEvents();
    }

    getUserSession() {
        axios.get('/api/user_session').then(res => {
            this.setState({
                user: res.data,
                loading: false
            })
        })
    }

    getUserEvents() {
        axios.post(`/api/get-my-events`, { userEvents: this.props.user.userEvents }).then(res => {
            this.setState({
                events: res.data,
            })
        })
    }

    deleteEvent(id) {
        let user_id = this.props.user.user_id
        axios.post('/api/cancel-event', { user_id: user_id, event_id: id })
            .then((res) => {
                this.props.fetchUserSession()
            }
            )

    }

    logout() {
        axios.get('/api/logout')
            .then(response => {
                this.props.history.push("/")
                localStorage.setItem('accredited', 'false')
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    We're loading it up fer yeh
               </div>
            )
        } else {
            const { events } = this.state
            const { user } = this.props
            const listedEvents = events.map((event, i) => {
                return (
                    <div key={i}>
                        <EventsList
                            i={i + 1}
                            name={event.eventName}
                            date={event.eventDate}
                            address={event.address}
                            description={event.description}
                        />
                        <button id='user-delete-button' ><i onClick={() => this.deleteEvent(event._id)} className='fa fa-trash'></i></button>
                    </div>
                )
            })
            return (
                <div className="user-page-background">
                    <div className="user-page">
                        <div className="user-info-header">
                            <h1 id="user-name">{user.username}'s profile</h1>
                            <div className="button-box">
                                <Link to="/event-form">
                                    <button className='user-page-button' id="post-event">Create New Event</button>
                                </Link>
                                <button className='user-page-button' onClick={() => this.getUserEvents()}>Show My Events</button>
                                <button className='user-page-button' onClick={() => this.logout()}>Logout</button>
                            </div>
                        </div>
                        <div className="event-container">
                            {listedEvents}
                        </div>
                    </div>
                </div>
            )
        }
    }
};