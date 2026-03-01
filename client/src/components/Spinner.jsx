const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', gap: '1rem' }}>
      <div
        className="animate-spin rounded-full border-4 border-white border-t-transparent"
        style={{ width: '48px', height: '48px' }}
      />
      <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{message}</p>
    </div>
  );
};

export default Spinner;
