import React from 'react';
import Gmap from './Gmap/Gmap'
import moment from "moment";
import axios from "axios";

export default class MapPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
            cityLatLng: {}
        }
        this.populateResults = this.populateResults.bind(this);
        this.getCityLoc = this.getCityLoc.bind(this);
    }
    componentDidMount(){
        this.populateResults();
        this.getCityLoc();
    }

    populateResults(){
        const city = localStorage.getItem("city");
        const dateBegin = moment(localStorage.getItem("dateBegin")).format();
        const dateEnd = moment(localStorage.getItem("dateEnd")).format();
        axios.post('/api/search', {city: city, dateBegin: dateBegin, dateEnd: dateEnd})
        .then( res => {
            this.setState({
                events: res.data,
            })
        })
   }

    getCityLoc() {
        axios.post('/api/get-city-loc', {city: localStorage.getItem("city")})
        .then(res => {
            this.setState({cityLatLng: res.data})
        })
    }

   render(){
    return(
        <Gmap events={this.state.events} cityLatLng={this.state.cityLatLng}/>
    )
   }
}