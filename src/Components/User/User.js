import React, { Component } from 'react';
import Search from './Search';
import List from '../MapPage/List/List';
import { Link } from 'react-router-dom';
import './User.scss';
import axios from 'axios';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            events: [],
            loading: true
        }
        this.getUserEvents = this.getUserEvents.bind(this);
        this.getUserSession = this.getUserSession.bind(this);
    }

    componentDidMount() {
        this.getUserSession();
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
        axios.post(`/api/get-my-events`, { userEvents: this.state.user.userEvents }).then(res => {
            console.log("itworked")
            this.setState({
                events: res.data,
            })
        })
    }


    render() {
        console.log(this.state)
        if (this.state.loading) {
            return (
                <div>
                    We're loading it up fer yeh
               </div>
            )
        } else {
            const { events, user } = this.state
            const listedEvents = events.map((event, i) => {
                return (
                    <div key={i}>
                        <List
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
                    <Link to="/userform">
                        <button id="post-event">Create New Event</button>
                    </Link>
                    <button onClick={() => this.getUserEvents()}>Show My Events</button>
                    <div className="event-container">
                        {listedEvents}
                    </div>
                </div>
            )
        }
    }
};