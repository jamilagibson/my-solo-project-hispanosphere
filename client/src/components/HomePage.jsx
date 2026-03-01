import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#1e2a47', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>

      {/* Logo */}
      <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌎</div>

      {/* App Name */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ff5f5f', marginBottom: '0.5rem', lineHeight: '1.2' }}>
        Out of Many... ONE Hispanosphere
      </h1>

      {/* Tagline */}
      <p style={{ fontSize: '1.1rem', color: '#ffbc42', marginBottom: '2.5rem', fontStyle: 'italic' }}>
        Explore the culture, history, and people of the Spanish-speaking world
      </p>

      {/* Welcome message */}
      <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
        <p style={{ color: '#e2e8f0', fontSize: '1rem', lineHeight: '1.75', marginBottom: '1rem' }}>
          Welcome to Hispanosphere — an interactive journey through 26 countries and territories
          united by the Spanish language. Discover the music, food, history, and slang of each
          unique culture, from the tango halls of Buenos Aires to the volcanic highlands of Guatemala.
        </p>
        <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.75', fontStyle: 'italic' }}>
          Bienvenido/a a Hispanosphere — un viaje interactivo por 26 países y territorios unidos
          por el idioma español. Descubre la música, la gastronomía, la historia y el habla cotidiana
          de cada cultura única, desde los salones de tango de Buenos Aires hasta las tierras altas
          volcánicas de Guatemala.
        </p>
      </div>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => navigate('/map')}
          style={{
            background: '#ff5f5f',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.875rem 2rem',
            fontSize: '1.05rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#e04d4d'}
          onMouseOut={e => e.currentTarget.style.background = '#ff5f5f'}
        >
          Explore the Map 🗺️
        </button>

        <button
          onClick={() => navigate('/countries')}
          style={{
            background: 'transparent',
            color: '#ffbc42',
            border: '2px solid #ffbc42',
            borderRadius: '0.5rem',
            padding: '0.875rem 2rem',
            fontSize: '1.05rem',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseOver={e => { e.currentTarget.style.background = '#ffbc42'; e.currentTarget.style.color = '#1e2a47'; }}
          onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffbc42'; }}
        >
          Browse Countries 📋
        </button>
      </div>
    </div>
  );
};

export default HomePage;
