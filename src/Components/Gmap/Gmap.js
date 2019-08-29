import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';
import axios from 'axios';


export default function Gmap() {
    let markers = filteredEvents.map(event => (
        <Marker 
            key={event.eventID}
            position={{lat: event.lat, lng: event.lng}}
        />
    ))

    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 36.921719, lng: -76.014900}}
            // defaultCenter={{'city coords from state or props' --> {lat: }}}
        >
            {markers}
        </GoogleMap>
    );
}