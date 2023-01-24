import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '%100',
    height: '800px'
};

const center = {
    lat: 34.43114,
    lng: 8.77565
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.KEY
    })

    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
            <Marker position={center} />
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent)