import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

const DEFAULT_CENTER = [10, -30];
const DEFAULT_ZOOM = 2;

const HispanosphereMap = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/countries')
      .then(res => setCountries(res.data))
      .catch(() => setError('Could not load map data. Is the server running?'))
      .finally(() => setLoading(false));
  }, []);

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

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', background: '#1a1a2e', color: '#fff', fontSize: '1.25rem' }}>
        Loading map...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vh', background: '#1a1a2e', color: '#ff5f5f', fontSize: '1.25rem' }}>
        {error}
      </div>
    );
  }

  const bounds = countries.length > 0
    ? L.latLngBounds(countries.map(c => [c.lat, c.lng]))
    : null;

  return (
    <div style={{ background: '#111827' }}>
      <MapContainer
        bounds={bounds || undefined}
        center={bounds ? undefined : DEFAULT_CENTER}
        zoom={bounds ? undefined : DEFAULT_ZOOM}
        scrollWheelZoom={true}
        style={{ height: '90vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {countries.map((country) => (
          <Marker key={country.code} position={[country.lat, country.lng]}>
            <Popup>
              {getPopupMessage(country)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HispanosphereMap;
