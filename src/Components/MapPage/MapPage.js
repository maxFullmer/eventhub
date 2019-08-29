import React from 'react';
import Gmap from './Gmap/Gmap'
import List from './List/List';
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import moment from "moment";
import axios from "axios";


const WrappedMap = withScriptjs(withGoogleMap(Gmap));

export default class MapPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }
   componentDidMount(){
       const city = localStorage.getItem("city");
       const dateBegin = moment(localStorage.getItem("dateBegin")).format();
       const dateEnd = moment(localStorage.getItem("dateEnd")).format();
    axios.post('/api/search', {city: city, dateBegin: dateBegin, dateEnd: dateEnd})
    .then( res => {
        this.setState({
            events: res.data
        })
    })
   }

   
   
   render(){
       const {events} = this.state;
        const listedEvents = events.map( event => {
            return (
                <ul class="accordion__list">
                    <List decription={event.description} date={event.date} address={event.address} name={event.eventName}/>
                </ul>
            )
        })
    return(
        <div id="wrapped-map-container">
            <WrappedMap 
                // googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAPS_API_KEY}`}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places`}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
          </div>
    )
   }
}