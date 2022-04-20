import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigator';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import { getCountries } from './redux/modules/country';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCountries()(dispatch);
  }, []);
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </div>

  );
}

export default App;
