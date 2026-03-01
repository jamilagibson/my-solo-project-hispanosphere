import { NavLink } from 'react-router-dom';

const linkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '0.95rem',
  padding: '0.25rem 0',
  borderBottom: '2px solid transparent',
  transition: 'color 0.2s, border-color 0.2s',
};

const activeLinkStyle = {
  ...linkStyle,
  color: '#ffbc42',
  borderBottom: '2px solid #ffbc42',
};

const Navbar = () => {
  return (
    <nav
      aria-label="Main navigation"
      style={{
        background: '#111827',
        borderBottom: '1px solid #1e2a47',
        padding: '0.75rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo / brand */}
      <NavLink
        to="/"
        aria-label="Hispanosphere home"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <span aria-hidden="true" style={{ fontSize: '1.4rem' }}>🌎</span>
        <span style={{ color: '#ff5f5f', fontWeight: '800', fontSize: '1rem', letterSpacing: '0.01em' }}>
          Hispanosphere
        </span>
      </NavLink>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/map"
          aria-label="Explore the map"
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          Map <span aria-hidden="true">🗺️</span>
        </NavLink>
        <NavLink
          to="/countries"
          aria-label="Browse all countries"
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          Countries <span aria-hidden="true">📋</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
