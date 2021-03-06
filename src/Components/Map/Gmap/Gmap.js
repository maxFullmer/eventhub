import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

export default function Gmap(props) {
    console.log('event props in Gmap', props.events)

    const MyMapComponent = withScriptjs(withGoogleMap(() => {
        return (
            <GoogleMap 
                defaultZoom={10} 
                defaultCenter={{lat: props.cityLatLng.lat, lng: props.cityLatLng.lng}}
            >
                {props.events.map(event => (
                    <Marker 
                        key={event._id}
                        position={{lat: event.lat, lng: event.lng}}
                    />
                ))}
            </GoogleMap>
        )
    }))

    return (
        <div id="wrapped-map-container">
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>} 
            />
        </div>
    );
}

