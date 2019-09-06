import React from 'react';
import Calendar from 'react-calendar';
import "./MainPage.scss"

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            date: new Date(),
            events: [],
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({
            date: e
        })
    }

    searchEvents(e) {
        e.preventDefault();
        const { city, date } = this.state;
        let capitalize = city.slice();
        capitalize.toLowerCase().split(' ')
        .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
        .join(' ');
        localStorage.setItem("city", capitalize);
        localStorage.setItem("date", date)
        this.props.history.push('/map');
    }

    render() {
        return (
            <div className="main-page">
                <div className="main-container">
                    <input
                        id="city-input"
                        placeholder="Enter City (ie. Virginia Beach)"
                        value={this.state.city}
                        onChange={(e) => { this.setState({ city: e.target.value }) }}
                    />
                    <Calendar
                        onChange={this.changeHandler}
                        value={this.state.date}
                    />
                    <button id="party-button" onClick={(e) => this.searchEvents(e)}>Let's Party</button>
                </div>
            </div>
        )
    }
}
