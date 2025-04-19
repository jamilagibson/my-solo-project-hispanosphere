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
        //TailwindCSS padding p-4; ADD MORE STYLING HERE such as background border, etc
        <div className="p-6 max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/')}
              className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              ⬅️ Back to Map
            </button>
            {/* TailwindCSS styling for heading */}
            <h2 className="text-xl font-semibold mb-2">
                {/* render full name of country */}
                You're exploring {country.name}
            </h2>
            
      {/* ✅ If funFacts exist, render them as a list */}
      {country.funFacts?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Fun Facts</h3>
          <ul className="list-disc ml-6">
            {country.funFacts.map((fact, idx) => (
              <li key={idx}>{fact}</li> // Loop through and display each fact
            ))}
          </ul>
        </div>
      )}

      {/* ✅ Dynamically render each subtopic and its content */}
      {country.subtopics && (
        <div className="space-y-6">
          {
            // Convert subtopics object to array of [key, value] pairs and loop through
            Object.entries(country.subtopics).map(([key, subtopic]) => (
              <div key={key} className="border rounded-lg p-4 shadow-md bg-white">
                {/* ✅ Subtopic title and content */}
                <h4 className="text-lg font-semibold mb-2">{subtopic.title}</h4>
                <p className="mb-2">{subtopic.content}</p>

                {/* ✅ Optionally render a YouTube video if one exists */}
                {subtopic.url && (
                  <a
                    href={subtopic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline block mt-2"
                  >
                    🎵 Listen to "{subtopic.songTitle}" by {subtopic.artist} on YouTube
                  </a>
                 )}
              </div>
            ))
          }
        </div>
      )}
        </div>

    );
};

export default ExploreCountry