import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

export default function Gmap() {

    const gmap = () => {
        return <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat: 36.921719, lng: -76.014900}}
    />
    }

    const WrappedMap = withScriptjs(withGoogleMap(gmap));

    return (
        <div id="wrapped-map-container">
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"}
                loadingElement={<div style={{height: "100%"}}/>}
                containerElement={<div style={{height: "100%"}}/>}
                mapElement={<div style={{height: "100%"}}/>}
            />
        </div>
    )
}



