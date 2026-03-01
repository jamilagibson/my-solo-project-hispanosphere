import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HispanosphereMap from './components/HispanosphereMap';
import CountryList from './components/CountryList';
import ExploreCountry from './components/ExploreCountry';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<HispanosphereMap />} />
      <Route path="/countries" element={<CountryList />} />
      <Route path="/explore/:code" element={<ExploreCountry />} />
    </Routes>
  );
}

export default App;
