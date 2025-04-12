import { useState, useEffect } from 'react';
//removed react and vite logo imports
import './App.css';
//import hispanosphere map component to use in main app component
import HispanosphereMap from './components/HispanosphereMap';

//declare functional root react component to render everything else inside it
function App() {

  //return statement describes what App component will render on screen
  return (
    <>
      {/* className assigns CSS classes in JSX (not class like in reg HTML; style with Tailwind classes) */}
      <div className="app-container">

        {/* render heading with TailwindCSS classes */}
        <h1 className="text-2xl font-bold text-center my-4">
          Out of Many... ONE Hispanosphere
        </h1>
        {/* render imported map component; where interactive Leaflet map will appear */}
        <HispanosphereMap />
      </div>
      
    </>
  )
}

export default App
