import React, { Component } from 'react';
import List from '../MapPage/List/List';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventsList from '../Map/EventsList/EventsList';
import './UserPage.scss';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            loading: true
        }
        this.getUserEvents = this.getUserEvents.bind(this);
        this.getUserSession = this.getUserSession.bind(this);
        console.log('in user constructor',this.props)
        console.log('same',props)
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
            console.log("response: ", res);
            this.setState({
                user: res.data,
                loading: false
            })
        })
        // .catch( (err) => {
        //     console.log(err);
        //     if (this.state.user === {}){
        //     alert('Please log in with a valid account');
        //     this.props.history.push('/login')
        //     }
        // })
    }

    getUserEvents() {
        axios.post(`/api/get-my-events`, { userEvents: this.props.user.userEvents }).then(res => {
            console.log("itworked")
            this.setState({
                events: res.data,
            })
        })
    }

    logout() {
        axios.get('/api/logout')
            .then(response => {
                this.props.history.push("/")
                localStorage.setItem('accredited', 'false')
            })
    }

    render() {
        console.log(this.props.user)
        if (this.state.loading) {
            return (
                <div>
                    We're loading it up fer yeh
               </div>
            )
        } else {
            const { events } = this.state
            const {user} = this.props
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
                        <span><button></button></span>
                    </div>
                )
            })
            return (
                <div className="user-page">
                    <h1 id="user-name">{user.username}</h1>
                    <Link to="/event-form">
                        <button id="post-event">Create New Event</button>
                    </Link>
                    <button onClick={() => this.getUserEvents()}>Show My Events</button>
                    <div className="event-container">
                        {listedEvents}
                    </div>
                    <button onClick={() => this.logout()}>Logout</button>
                </div>
            )
        }
    }
};