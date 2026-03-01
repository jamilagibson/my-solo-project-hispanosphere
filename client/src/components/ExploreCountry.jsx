import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  if (loading) return <p className="text-primary">Loading...</p>;
  if (error) return <p className="text-secondary">{error}</p>;
  if (!country) return <p>No data found!</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-light-bg text-dark-bg">
      <button
        onClick={() => navigate('/map')}
        className="mb-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-all duration-300"
      >
        ⬅️ Back to Map
      </button>

      <h2 className="text-3xl font-bold text-primary mb-4">
        {country.flag} You're exploring {country.name}
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

      {/* Dynamically Render Other Subtopics (skip funFacts — rendered above) */}
      {country.subtopics && (
        <div className="space-y-6">
          {Object.entries(country.subtopics)
            .filter(([key]) => key !== 'funFacts')
            .map(([key, subtopic]) => (
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
