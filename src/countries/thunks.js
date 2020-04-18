import { loadCountryInProgress, loadCountrySuccess, loadCountryFailure } from './actions';

export const loadCountry = (countryCode) => async (dipatch, getState) => {
    try {
        dipatch(loadCountryInProgress());
        const response = await fetch(`https://api.thevirustracker.com/free-api?countryTotal=${countryCode}`);
        const country = await response.json();

        // await new Promise(resolve => setTimeout(resolve, 3000));
    
        dipatch(loadCountrySuccess(country));
    }
    catch (e) {
        dipatch(loadCountryFailure());
        dipatch(showAlert(e));
    }
}

export const showAlert = text => () => {
    alert(text);
}