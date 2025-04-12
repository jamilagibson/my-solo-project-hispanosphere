//import useParams hook to retrieve dynamic URL parameters like /explore/es & /explore/gq
import { useParams } from 'react-router-dom'

//store country subtopics in an array
const subtopics = [
    "Pop culture", "Media", "Music", "Fashion", "Art", "Literature", "Sports", "Food", 
    "News", "Politics", "Pre-colonial, colonial, post-colonial history", "People groups",
    "Landmarks", "Geography", "Touristy things to do", "Popular slang, sayings"
];

//declare functional React component "ExploreCountry to render new page when user navigates to /explore/:code"
function ExploreCountry() {
    //destructure to extract code parameter from URL, for example /explore/gq code=gq
    const { code } = useParams();

    //render JSX when user is routed to ExploreCountry from marker popups "clidk here"
    return (
        //TailwindCSS padding p-4; ADD MORE STYLING HERE such as background border, etc
        <div className="p-4">
            {/* TailwindCSS styling for heading */}
            <h2 className="text-xl font-semibold mb-2">
                {/* WOULD LIKE TO CHANGE THIS TO FULL SPELLING OF COUNTRY */}
                You're exploring: {code.toUpperCase()}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
                {subtopics.map((topic, idx) => (
                    <li key={idx} className="text-lg">
                        {topic}
                    </li>
                ))}
            </ul>
            {/* Placeholder for interactive subtopic content */}
            <p>Subtopics and content coming soon!</p>
        </div>
    );
};

export default ExploreCountry