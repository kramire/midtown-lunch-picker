import React from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { LocationDetails, Reviews } from './Components';
import { RandomGenerator } from './Containers';

function App() {
  const location = useSelector(state => state.locationDetails);
  const reviews = useSelector(state => state.reviews.data);

  return (
    <div test-id='app' className="App">
      <h1>MIDTOWN LUNCH PICKER</h1>
      <RandomGenerator />
      {location.address.length > 0 && <LocationDetails location={location} />}
      {reviews.length > 0 && <Reviews reviews={reviews} />}
    </div>
  );
}

export default App;
