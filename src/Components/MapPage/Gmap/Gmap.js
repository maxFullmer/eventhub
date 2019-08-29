import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';



export default class Gmap extends React.Component {


    render(){
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 36.921719, lng: -76.014900}}
            // defaultCenter={{'city coords from state or props' eventLocation()}}
        >
            {/* {filteredEvents.map(event => (
                <Marker 
                    key={event.eventID}
                    position={{lat: eventLocation(event).lat, lng: eventLocation(event).lng}}
                />
            ))} */}
        </GoogleMap>
    );
}
}





