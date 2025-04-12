import { useState, useEffect } from 'react';
//removed react and vite logo imports, might need to remove App.css
import './App.css';
//import Routes and Route & Routes components
import { Routes, Route } from 'react-router-dom';
//import hispanosphere map component to use in main app component
import HispanosphereMap from './components/HispanosphereMap';
//import ExploreCountry component
import ExploreCountry from './components/ExploreCountry';

//declare functional root react component to render everything else inside it
function App() {

  //return statement describes what App component will render on screen
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          // {/* className assigns CSS classes in JSX (not class like in reg HTML; style with Tailwind classes) */}
          <div className="app-container">
            {/* render heading with TailwindCSS classes */}
            <h1 className="text-2xl font-bold text-center my-4">
              Out of Many... ONE Hispanosphere
            </h1>
            {/* render imported map component; where interactive Leaflet map will appear */}
            <HispanosphereMap />
          </div>
        }
      />
      <Route path="/explore/:code" element={ <ExploreCountry /> } />
    </Routes> 
    </>
  );
}

export default App
