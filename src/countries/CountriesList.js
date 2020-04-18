import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CountryDetail from './CountryDetail';
import { removeCountry, pinCountry } from './actions';

// import { showAlert } from './thunks';

import { getIsLoading, getPinnedCountries, getNotPinnedCountries } from './selectors';

// import './CountriesList.css';

const CountriesListWrapper = styled.div`
    margin-bottom: 2rem;
`;

const Loader = styled.div`
    margin: 15px 0;
    text-align: center;
`;

const CountriesList = ({ pinnedCountries, notPinnedCountries, isLoading, onRemovePressed, onPin }) => {
    const loadingMessage = (<Loader>Loading Country...</Loader>);
    const content = (
        <CountriesListWrapper>
            {/* {countries.map((country, index) => {
                return <CountryDetail key={index} country={country} onRemovePressed={onRemovePressed} onPin={onPin} />
            })} */}
            {pinnedCountries.length > 0 && <h3>Pinned Countries</h3>}
            {pinnedCountries.map((country, index) => {
                return <CountryDetail key={index} country={country} onRemovePressed={onRemovePressed} onPin={onPin} />
            })}
            {notPinnedCountries.length > 0 && <h3>Not Pinned Countries</h3>}
            {notPinnedCountries.map((country, index) => {
                return <CountryDetail key={index} country={country} onRemovePressed={onRemovePressed} onPin={onPin} />
            })}
        </CountriesListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    // countries: getCountries(state),
    pinnedCountries: getPinnedCountries(state),
    notPinnedCountries: getNotPinnedCountries(state),
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: countryCode => dispatch(removeCountry(countryCode)),
    onPin: countryCode => dispatch(pinCountry(countryCode)),
    // onPinClicked: text => dispatch(showAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
// export default CountriesList;