import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import Spinner from './Spinner';

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
      <div style={{ background: '#1a1a2e', height: '90vh' }}>
        <Spinner message="Loading map..." />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh', background: '#1a1a2e', gap: '0.75rem' }}>
        <span style={{ fontSize: '2.5rem' }}>🌐</span>
        <p style={{ color: '#ff5f5f', fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Could not load the map</p>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Make sure the server is running on port 8080 and try refreshing.</p>
      </div>
    );
  }

  return (
    <MapContainer
      center={[15, -30]}
      zoom={2}
      scrollWheelZoom={true}
      maxBounds={[[-90, -180], [90, 180]]}
      maxBoundsViscosity={1.0}
      style={{ height: '90vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
        noWrap={true}
      />

      {countries.map((country) => (
        <Marker key={country.code} position={[country.lat, country.lng]}>
          <Popup>
            {getPopupMessage(country)}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default HispanosphereMap;
