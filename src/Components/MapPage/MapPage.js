import React from 'react';
import Gmap from './Gmap/Gmap'
import List from './List/List';
import moment from "moment";
import axios from "axios";

export default class MapPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
            latLng: {},
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
           this.setState({latLng: res.data})
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
        <div>
        <Gmap events={this.state.events} latLng={this.state.latLng}/>
        <div>
        <h1>EVENTS HAPPENING IN YOUR AREA</h1>
            <div className="row">
                <div className="col">
                    <div className="tabs">
                        {listedEvents}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )}
   
}
}