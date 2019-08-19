import React from 'react';
import './App.css';
import { RandomGenerator, Filters, LocationDetails, Reviews } from './Components';

function App() {
  return (
    <div className="App">
      <h1>MIDTOWN LUNCH PICKER</h1>
      <RandomGenerator />
      <Filters />
      <LocationDetails />
      <Reviews />
    </div>
  );
}

export default App;
