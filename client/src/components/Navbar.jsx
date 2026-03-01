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
    <nav style={{
      background: '#111827',
      borderBottom: '1px solid #1e2a47',
      padding: '0.75rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      {/* Logo / brand */}
      <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '1.4rem' }}>🌎</span>
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
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          Map 🗺️
        </NavLink>
        <NavLink
          to="/countries"
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          Countries 📋
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
