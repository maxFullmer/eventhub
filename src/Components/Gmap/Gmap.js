import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';
import axios from 'axios';


export default function Gmap() {
    // let eventLocation = (eventObj) => {
    //     axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
    //         params: {
    //             address: `${eventObj.address.street} ${eventObj.address.city} ${eventObj.address.state} ${eventObj.address.zip}`,
    //             key: GOOGLE_MAPS_API_KEY
    //         }
    //     })
    //     .then(response => {
    //         let lat = response.data.results[0].geometry.location.lat;
    //         let lng = response.data.results[0].geometry.location.lng;
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })


    // }
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

    // const WrappedMap = withScriptjs(withGoogleMap(gmap));

//     return (
//         <div id="wrapped-map-container">
//             <WrappedMap 
//                 googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAPS_API_KEY}`}
//                 loadingElement={<div style={{height: "100%"}}/>}
//                 containerElement={<div style={{height: "100%"}}/>}
//                 mapElement={<div style={{height: "100%"}}/>}
//             />
//         </div>
//     )
// }



