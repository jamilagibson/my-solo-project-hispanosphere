//import useParams hook to retrieve dynamic URL parameters like /explore/es & /explore/gq
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import SubtopicCard from './SubtopicCard'
import { useNavigate } from 'react-router-dom';



//store country subtopics in an array; static list for now
const subtopics = [
    "Pop culture", "Media", "Music", "Fashion", "Art", "Literature", "Sports", "Cuisine", 
    "News", "Politics", "History", "People",
    "Landmarks", "Geography", "Touristy things to do", "Local Jargon"
];

//declare functional React component "ExploreCountry to render new page when user navigates to /explore/:code"
function ExploreCountry() {
    
    //destructure to extract dynamic route code parameter from URL, for example /explore/gq code=gq
    const { code } = useParams();

    const navigate = useNavigate();

    //state to store fetched country data
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState (null);

    console.log('Country data:', country);
    //Set up component state with useEffect for fetched data when component mounts
    useEffect( () => {
        const fetchCountry = async () => {
            try {
                //send GET request to backend API route for this country's data
                const response = await axios.get(`http://localhost:8080/api/countries/${code.toUpperCase()}`);

                //update country state with returned object
                setCountry(response.data); //expects res to be single country object, not an arr; removed [0] from data
            } catch (err) {
                //handle fetch failure
                setError('Could not fetch country data');
            } finally {
                //stop loading spinner once complete
                setLoading(false);
            }
        };

        fetchCountry();
    }, [code]); //dependency arr; re-run if code changes

    //render different content on loading based on state
    if (loading) return <p>Loading...</p>;
    //render error
    if (error) return <p>{error}</p>;
    if(!country) return <p>No data found!</p>;

    //render JSX when user is routed to ExploreCountry from marker popups "clidk here"
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white text-blue-900">
        <button
          onClick={() => navigate('/')}
          className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          ⬅️ Back to Map
        </button>
  
        <h2 className="text-3xl font-bold text-red-700 mb-4">
          You're exploring {country.name}
        </h2>
  
        {/* ✅ If funFacts exist, render them as a list */}
        {/* {country.funFacts?.length > 0 && (
          <div className="mb-6 bg-yellow-100 text-red-800 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fun Facts</h3>
            <ul className="list-disc ml-6">
              {country.funFacts.map((fact, idx) => (
                <li key={idx}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
   */}
        {/* ✅ Dynamically render each subtopic and its content */}
        {country.subtopics && (
          <div className="space-y-6">
            {Object.entries(country.subtopics).map(([key, subtopic]) => (
              <div
                key={key}
                className="border rounded-lg p-4 shadow-md bg-blue-600 text-white"
              >
                <h4 className="text-lg font-semibold mb-2">{subtopic.title}</h4>
                <p className="mb-2">{subtopic.content}</p>
  
                {subtopic.url && (
                  <a
                    href={subtopic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-300 hover:text-yellow-200 underline block mt-2"
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
  };
  

export default ExploreCountry