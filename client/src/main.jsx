import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import leaflet's css so map tiles will display correctly
import 'leaflet/dist/leaflet.css'
//import BrowserRouter
import { BrowserRouter } from 'react-router-dom'

//Bootstrap app with React; retrieves DOM element from index.html with id=root; creates React root to manage rendering inside element
createRoot(document.getElementById('root')).render(
  //JSX that's rendered in root container; strict mode to catch bugs, can be removed in production
  <StrictMode>
    {/* Wrap App in router to enable use of browser's address bar*/}
    <BrowserRouter>
      {/* routes will be defined in App component; App contains all UI */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
/**
 * What does it mean to Bootstrap an app
 */