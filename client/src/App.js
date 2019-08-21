import React from 'react';
import './App.css';
import { RandomGenerator, Filters, LocationDetails, Reviews } from './Components';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>MIDTOWN LUNCH PICKER</h1>
      <RandomGenerator />
      {/* <LocationDetails /> */}
      <Reviews />
    </div>
  );
}

export default App;
