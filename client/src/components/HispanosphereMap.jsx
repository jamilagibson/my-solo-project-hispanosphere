import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesPlusOneTerritory from '../data/countriesPlusOneTerritory';
import L from 'leaflet';

const bounds = L.latLngBounds(
  countriesPlusOneTerritory.map((country) => [country.lat, country.lng])
);

const HispanosphereMap = () => {
  // Helper function for popup messages
  const getPopupMessage = (country) => {
    let message = '';

    if (country.name === 'Puerto Rico') {
      message = 'Aha! Puerto Rico is a U.S. Territory—NOT a country.';
    } else {
      message = country.official
        ? 'Official Spanish-speaking country'
        : 'Significant Spanish influence';
    }

    return (
      <div className="text-sm text-gray-800">
        <p>{country.flag} {country.name}</p>
        <p className="font-semibold">{message}</p>
        <p>
          Click{' '}
          <a
            href={`/explore/${country.code}`}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            here
          </a>{' '}
          to learn more!
        </p>
      </div>
    );
  };

  return (
    <div className="container mx-auto my-8 px-0 bg-gray-900"> {/* Dark gray background */}
      <div className="relative">
        <MapContainer
          bounds={bounds}
          scrollWheelZoom={true}
          style={{ height: '90vh', width: '100%' }} // Set width to 100% to stretch across the screen
        >
          {/* TileLayer for OpenStreetMap */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* Render country markers dynamically */}
          {countriesPlusOneTerritory.map((country, index) => (
            <Marker key={index} position={[country.lat, country.lng]}>
              <Popup>
                {getPopupMessage(country)}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Optional: Floating action button */}
        <div className="absolute bottom-8 right-8">
          <a
            href="#"
            className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <span className="text-xl">🗺️</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HispanosphereMap;
