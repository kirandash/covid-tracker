export const CREATE_COUNTRY = 'CREATE_COUNTRY';
export const createCountry = countryCode => ({
    type: CREATE_COUNTRY,
    payload: { countryCode }
});

export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
export const removeCountry = countryCode => ({
    type: REMOVE_COUNTRY,
    payload: { countryCode }
});

export const PIN_COUNTRY = 'PIN_COUNTRY';
export const pinCountry = countryCode => ({
    type: PIN_COUNTRY,
    payload: { countryCode }
});

export const LOAD_COUNTRY_IN_PROGRESS = 'LOAD_COUNTRY_IN_PROGRESS';
export const loadCountryInProgress = () => ({
    type: LOAD_COUNTRY_IN_PROGRESS
});

export const LOAD_COUNTRY_SUCCESS = 'LOAD_COUNTRY_SUCCESS';
export const loadCountrySuccess = countries => ({
    type: LOAD_COUNTRY_SUCCESS,
    payload: { countries }
});

export const LOAD_COUNTRY_FAILURE = 'LOAD_COUNTRY_FAILURE';
export const loadCountryFailure = () => ({
    type: LOAD_COUNTRY_FAILURE
});