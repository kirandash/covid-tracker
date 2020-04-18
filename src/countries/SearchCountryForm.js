import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// import { createCountry } from './actions';
import { loadCountry } from './thunks';
import { getCountries } from './selectors';

// import './SearchCountryForm.css';

const SearchCountryFormWrapper = styled.div`
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 0px 2px white;
    background: #212121;
`;

const SearchCountryInput = styled.input`
    font-size: 1rem;
    padding: 8px;
    border: none;
    width: 70%;
    outline: none;
`;

const SearchCountryButton = styled.button`
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 0.5rem;
    width: 20%;
    background-color: #73b2ff;
    text-transform: uppercase;
`;

const SearchCountryForm = ({countries = [], onSubmitPressed}) => {
    const [inputCountryCode, setInputCountryCode] = useState('');
    return (
        <SearchCountryFormWrapper>
            <SearchCountryInput 
                onChange={e => setInputCountryCode(e.target.value)}
                value={inputCountryCode}
                placeholder="Type country code and submit to start tracking!" />
            <SearchCountryButton
                onClick={() => {
                    const isDuplicateCountry = countries.some(country => country.info.code === inputCountryCode);
                    if(!isDuplicateCountry && inputCountryCode) {
                        onSubmitPressed(inputCountryCode);
                        setInputCountryCode('');
                    }
                }} 
                className="search-country-button">Submit</SearchCountryButton>
        </SearchCountryFormWrapper>
    )
}

const mapStateToProps = (state) => ({
    countries: getCountries(state),
});

const mapDispatchToProps = dispatch => ({
    // onSubmitPressed: countryCode => dispatch(createCountry(countryCode)),
    onSubmitPressed: countryCode => dispatch(loadCountry(countryCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCountryForm)
// export default SearchCountryForm;