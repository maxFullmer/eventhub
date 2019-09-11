import React from 'react'
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NewEventForm.scss';

const google = window.google;

class UserEventsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState(props);
        this.handleChange = this.handleChange.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.getUserSession = this.getUserSession.bind(this);
        this.autocomplete = null;
    }

    initialState(props) {
        return {
            eventName: '',
            eventDate: new Date(),
            description: '',
            formatted_address: '',
            city: '',
            user: props.user
        }
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        this.autocomplete.setFields(['address_components']);
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
        // this.getUserSession();
    }

    getUserSession() {
        axios.get('/api/user_session').then(res => {
            console.log("response: ", res);
            this.setState({
                user: res.data,
            })
        })
    }

    handleChange(property, value) {
        this.setState({
            [property]: value
        });
    }

    changeHandler(e) {
        this.setState({
            eventDate: e
        })
    }


    handlePlaceSelect() {
        let addressObject = this.autocomplete.getPlace()
        let address = addressObject.address_components;
        let locality = address.filter(element => {
            return element.types.includes("locality")
        })[0].long_name;

        console.log("autocomplete after selecting address: ", this.autocomplete);

        let selectedAddress = this.autocomplete.gm_accessors_.place.Wc.i;

        this.setState({
            formatted_address: selectedAddress,
            city: locality
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            eventName,
            eventDate,
            description,
            formatted_address,
            city
        } = this.state;
        axios.post(`/api/post-event`, {
            eventName: eventName,
            eventDate: eventDate,
            description: description,
            formatted_address: formatted_address,
            city: city,
            user_id: this.props.user.user_id
        })
            .then((res) => {
                this.props.fetchUserSession()
                this.props.history.push("/user")
            })
            .catch(error => console.log(error));

    }

    render() {
        console.log('eventName: ', this.state.eventName);
        console.log('eventDate: ', this.state.eventDate);
        console.log('description: ', this.state.description);
        console.log('formatted_address: ', this.state.formatted_address);
        console.log('city: ', this.state.city);
        return (

            <div id="events-page">
                <div className="events-box">
                    <h2>Create An Event</h2>

                    <form className="events-form">

                        <p className="events-p">Event Name:</p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            onChange={(e) => this.handleChange('eventName', e.target.value)}
                            value={this.state.eventName}
                        />

                        <p className="events-p">Event Date:</p>
                        <Calendar
                            value={this.state.eventDate}
                            onChange={this.changeHandler}
                        />

                        <p className="events-p">Description:</p>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Add a Description"
                            onChange={(e) => this.handleChange('description', e.target.value)}
                            value={this.state.description}
                        />

                        <p className="events-p">Search Address:</p>
                        <input
                            id="autocomplete"
                            className="form-control"
                            type="text"
                            ref="input"
                        />

                        <input
                            type="submit"
                            name="sbmt"
                            onClick={(event) => this.handleSubmit(event)}
                            style={{ text: "rgb(142, 228, 175)", fontSize: "24px" }}
                        />

                    </form>
                </div>
            </div >
        );
    }
}

export default UserEventsForm;