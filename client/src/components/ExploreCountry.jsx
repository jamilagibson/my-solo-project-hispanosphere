import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

// Define subtopics (for now statically)
const subtopics = [
  "Pop culture", "Media", "Music", "Fashion", "Art", "Literature", "Sports", "Cuisine", 
  "News", "Politics", "History", "People",
  "Landmarks", "Geography", "Touristy things to do", "Local Jargon"
];

function ExploreCountry() {
  const { code } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/countries/${code.toUpperCase()}`);
        setCountry(response.data);
      } catch (err) {
        setError('Could not fetch country data');
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading) return <div style={{ background: '#1e2a47', minHeight: '100vh' }}><Spinner message="Loading country..." /></div>;

  if (error) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#1e2a47', gap: '0.75rem' }}>
      <span style={{ fontSize: '2.5rem' }}>🌎</span>
      <p style={{ color: '#ff5f5f', fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>Could not load country data</p>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0 }}>Make sure the server is running on port 8080 and try refreshing.</p>
    </div>
  );

  if (!country) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#1e2a47', gap: '0.75rem' }}>
      <span style={{ fontSize: '2.5rem' }}>🗺️</span>
      <p style={{ color: '#94a3b8', fontWeight: '600', fontSize: '1.1rem', margin: 0 }}>No data found for this country yet.</p>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-light-bg text-dark-bg">
      <button
        onClick={() => navigate('/map')}
        className="mb-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
      >
        ⬅️ Back to Map
      </button>
  
      <h2 className="text-3xl font-bold text-primary mb-4">
        You're exploring {country.name}
      </h2>
  
      {/* Fun Facts Section */}
      {country.subtopics?.funFacts?.list?.length > 0 && (
        <div className="mb-6 bg-yellow-100 text-red-800 p-4 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-2">{country.subtopics.funFacts.title}</h3>
          <ul className="list-disc ml-6">
            {country.subtopics.funFacts.list.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </div>
      )}
  
      {/* Dynamically Render Other Subtopics */}
      {country.subtopics && (
        <div className="space-y-6">
          {Object.entries(country.subtopics).map(([key, subtopic]) => (
            <div
              key={key}
              className="border rounded-lg p-4 shadow-card bg-primary text-white"
            >
              <h4 className="text-lg font-semibold mb-2">{subtopic.title}</h4>
              <p className="mb-2">{subtopic.content}</p>

              {subtopic.url && (
                <a
                  href={subtopic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-yellow-200 underline block mt-2 transition-all duration-300"
                >
                  🎵 Listen to "{subtopic.songTitle}" by {subtopic.artist} on YouTube
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExploreCountry;
