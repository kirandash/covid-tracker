import React from 'react';
import styled from 'styled-components';

import SearchCountryForm from './countries/SearchCountryForm';
import CountriesList from './countries/CountriesList';

// import './App.css';

// import { sampleCountries } from './countries/sample-countries';

const AppWrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;



function App() {
  return (
    <AppWrapper>
      <SearchCountryForm/>
      <CountriesList/>
    </AppWrapper>
  );
}

export default App;
