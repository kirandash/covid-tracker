import React from 'react';

import SearchCountryForm from './countries/SearchCountryForm';
import CountriesList from './countries/CountriesList';

import './App.css';

import { sampleCountries } from './countries/sample-countries';

function App() {
  return (
    <div className="App">
      <SearchCountryForm/>
      <CountriesList countries={sampleCountries} />
    </div>
  );
}

export default App;
