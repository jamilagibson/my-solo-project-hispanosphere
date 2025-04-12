//import leaflet components from react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

//import leaflet's css so map tiles render correctly
import 'leaflet/dist/leaflet.css' 

//import countries array to map over data and render markers dynamically
import countriesPlusOneTerritory from '../data/countriesPlusOneTerritory'

//define functional component
const HispanosphereMap = () => {
    return (
        //initialize MapContainer as main wrapper for map
        //center: determines lat/lng where map initially loads
        //zoom: determines how close map is (lower = zoomed out)
        //style: sets size of map
        // <MapContainer //commented out for comparison to centering Spain and E.Q. below
        //     center={ [10, -60] } //centered on Spain
        //     zoom={2.5} //zoom based on size of Spain
        //     style={ { height: '80vh', width: '100%' } } //map styling
        // >
        <MapContainer
            center={ [15, -20] } //centered between Europe and Africa
            zoom={ 2.5 } //zoomed out enough to show both markers
            style={ { height: '80vh', width: '100%'} } //map styling
        >
            {/* add base map tiles from OpenStreetMap (open source alt to Google Maps) */}
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            {/* map over countries array of obj to render markers dynamically */}
            {countriesPlusOneTerritory.map((country, index) => (
                <Marker key={index} position={ [country.lat, country.lng]}>
                    <Popup>
                        {country.official ? 'Official Spanish-speaking country' : 'Significant Spanish influence'} <br />
                        {'Click here to learn more!'}
                    </Popup>
                </Marker>
            ))}
            {/* add marker/pin for Madrid */}
           
        </MapContainer>
    );
};

// Export component to be used in App.jsx
export default HispanosphereMap;