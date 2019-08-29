import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import axios from 'axios';
import "./Main.scss"

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: "",
            range: [new Date(), new Date()],
            events: []
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e){
        this.setState({
            range: e
        })
    }

    searchEvents(e){
        e.preventDefault();
        const { city, range } = this.state;
        localStorage.setItem("city", city)
        localStorage.setItem("dateBegin", range[0])
        localStorage.setItem("dateEnd", range[1])
        // axios.post('/api/search', {city: city, dateBegin: range[0], dateEnd: range[1]})
        // .then( res => {
        //     this.setState({
        //         events: res.data
        //     })
        // })
        this.props.history.push('/map');
        
    }

    render(){
        return(
            <div className="main-page">
                <input
                name="city"
                value={this.state.city} 
                onChange={(e) => {this.setState({ city: e.target.value})}}
                />
                <DateRangePicker
                onChange={this.changeHandler}
                value={this.state.range} 
                />
                <button onClick={(e) => this.searchEvents(e)}>Let's Party</button>
            </div>
        )
    }
}
