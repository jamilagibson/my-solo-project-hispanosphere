import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CountryList = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/countries')
      .then(res => setCountries(res.data))
      .catch(() => setError('Could not load countries. Is the server running?'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#1e2a47', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.25rem' }}>
        Loading countries...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', background: '#1e2a47', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff5f5f', fontSize: '1.25rem' }}>
        {error}
      </div>
    );
  }

  const official = countries.filter(c => c.official);
  const influence = countries.filter(c => !c.official);

  return (
    <div style={{ minHeight: '100vh', background: '#1e2a47', padding: '2rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#ff5f5f', marginBottom: '0.5rem' }}>
          🌎 Browse Countries
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
          {countries.length} countries and territories — click any to explore
        </p>
      </div>

      {/* Official Spanish-speaking countries */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 3rem' }}>
        <h2 style={{ color: '#ffbc42', fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Official Spanish-Speaking Countries
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {official.map(country => (
            <button
              key={country.code}
              onClick={() => navigate(`/explore/${country.code}`)}
              style={{
                background: '#162033',
                border: '1px solid #2d3f5e',
                borderRadius: '0.75rem',
                padding: '1.25rem 1rem',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'border-color 0.2s, transform 0.15s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#ff5f5f'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#2d3f5e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span style={{ fontSize: '2.5rem' }}>{country.flag}</span>
              <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '0.95rem' }}>{country.name}</span>
              <span style={{ background: '#1e6b3e', color: '#4ade80', fontSize: '0.7rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                Official
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Spanish influence countries */}
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ color: '#ffbc42', fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Notable Spanish Influence
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {influence.map(country => (
            <button
              key={country.code}
              onClick={() => navigate(`/explore/${country.code}`)}
              style={{
                background: '#162033',
                border: '1px solid #2d3f5e',
                borderRadius: '0.75rem',
                padding: '1.25rem 1rem',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'border-color 0.2s, transform 0.15s',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#ffbc42'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = '#2d3f5e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span style={{ fontSize: '2.5rem' }}>{country.flag}</span>
              <span style={{ color: '#e2e8f0', fontWeight: '600', fontSize: '0.95rem' }}>{country.name}</span>
              <span style={{ background: '#4a3800', color: '#ffbc42', fontSize: '0.7rem', fontWeight: '700', padding: '0.2rem 0.6rem', borderRadius: '9999px', textTransform: 'uppercase' }}>
                Spanish Influence
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CountryList;
