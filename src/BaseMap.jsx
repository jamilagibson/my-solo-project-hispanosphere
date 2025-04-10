import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const BaseMap = () => {
    const mapRef = useRef(null);
    const latitude = 51.505;
    const longitude = -0.09;

    return (
        //set height and width of map container to render map; vh/vw (en vez de px) ofrece capacidad de respuesta
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={ {height: "100vh", width: "100vw"} }>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Additional map layers or components can be added here */}
        </MapContainer>
    );
};

export default BaseMap;

/**
 * Resources:
 * simple map rendering tutorial: https://medium.com/@timndichu/getting-started-with-leaflet-js-and-react-rendering-a-simple-map-ef9ee0498202
 */