import React from 'react'
import './UserForm.scss';
import Calendar from 'react-calendar';
import axios from 'axios';
const google = window.google;

class UserEventsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.autocomplete = null;
    }

    initialState() {
        return {
            eventName: '',
            eventDate: new Date(),
            description: '',
            formatted_address: '',
            city: '',
            googleMapLink: ''
        }
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})
        this.autocomplete.setFields(['address_components']);
        this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
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

    handleSubmit = (event) => {
        event.preventDefault();
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
            city: city
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        console.log('eventName: ', this.state.eventName);
        console.log('eventDate: ', this.state.eventDate);
        console.log('description: ', this.state.description);
        console.log('formatted_address: ', this.state.formatted_address);
        console.log('city: ', this.state.city);

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
            <div id="events-page">
                <div className="col-lg-6 mx-auto">
                    <div id="events-card" className="card">
                        <div className="card-header">
                            <h4 style={titleStyle}>Create Event</h4>
                        </div>
                        <div className="card-body">

                            <div className="form-group-lg">
                                <label className="eventName-label" htmlFor="eventName" style={subTitleStyle}>Event Name:</label>
                                <input style={emailInputStyle} type="text" className="form-control" onChange={(e) => this.handleChange('eventName', e.target.value)} value={this.state.eventName} />
                            </div>

                            <div className="form-group-lg">
                                <label className="eventDate-label" htmlFor="eventDate" style={subTitleStyle}>Event Date:</label>
                                <Calendar
                                    value={this.state.eventDate}
                                    onChange={this.changeHandler}
                                />

                            </div>

                            <div className="form-group-lg">
                                <label className="description-label" htmlFor="description" style={subTitleStyle}>Description:</label>
                                <input style={emailInputStyle} type="text" className="form-control" onChange={(e) => this.handleChange('description', e.target.value)} value={this.state.description} />
                            </div>
                            <div className="form-group-lg">
                                <label className="formatted_address-label" htmlFor="formatted_address" style={subTitleStyle}>Search Address:</label>
                                <input id="autocomplete" style={inputStyle} className="form-control" ref="input" type="text" />
                            </div>
                            {/* <div className="form-group">
                                    <h6>Search Address:</h6>
                                    <input id="Autocomplete" className="form-control" ref="input" type="text" />
                                    <input
                                        name={"Street"}
                                        value={this.state.address.street}
                                        placeholder={"Street"}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        name={"City"}
                                        value={this.state.address.city}
                                        placeholder={"City"}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        name={"State"}
                                        value={this.state.address.state}
                                        placeholder={"State"}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        name={"Zip-Code"}
                                        value={this.state.address.zip}
                                        placeholder={"Zip-Code"}
                                        onChange={this.handleChange}
                                    />
                                </div> */}

                            <input type="Submit" onClick={() => this.handleSubmit()} className="btn btn-block" style={buttonStyle} />

                        </div>
                    </div >
                </div >
            </div >
        );
    }
}

export default UserEventsForm;