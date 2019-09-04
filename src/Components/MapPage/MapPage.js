import React from 'react';
import Gmap from './Gmap/Gmap'
import List from './List/List';
import axios from "axios";
import "./MapPage.scss"

export default class MapPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
            cityLatLng: {},
            loading:true
        }
        this.populateResults = this.populateResults.bind(this);
        this.getCityLoc = this.getCityLoc.bind(this);
    }
    componentDidMount(){
        this.populateResults();
        this.getCityLoc();
        this.setState({
            loading:false
        })
    }

    populateResults(){
        const city = localStorage.getItem("city");
        const date = localStorage.getItem("date");
        console.log( typeof dateBegin)
        axios.post('/api/search', {city: city, eventDate: date})
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
       if(this.state.loading){
           return(
               <div>
                   We're loading it up fer yeh
               </div>
           )
       } else{
           const {events} = this.state
        const listedEvents = events.map((event, i) => {
            return (
                <List
                i={i+1} 
                name={event.eventName} 
                date={event.eventDate}  
                address={event.address}
                description={event.description}
                />
            )
        })
    return(
        <div className='map-background'>
            <h1>Events in {localStorage.getItem("city")}</h1>
        <div className="map-page">
        <Gmap id="map" events={this.state.events} cityLatLng={this.state.cityLatLng}/>
        <div id="event-list">
            <div className="row">
                <div className="col">
                    <div className="tabs">
                        {listedEvents}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )}
   
}
}