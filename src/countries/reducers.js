import { CREATE_COUNTRY, REMOVE_COUNTRY, PIN_COUNTRY, LOAD_COUNTRY_IN_PROGRESS, LOAD_COUNTRY_SUCCESS, LOAD_COUNTRY_FAILURE } from './actions';

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch(type) {
        case LOAD_COUNTRY_IN_PROGRESS:
            return true;
        case LOAD_COUNTRY_SUCCESS:
        case LOAD_COUNTRY_FAILURE:
            return false;
        default:
            return state;
    }
}

export const countries = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_COUNTRY: {
            const { countryCode } = payload;

            const newCountry = {
                "info":{
                    "ourid":177,
                    "title":countryCode,
                    "code":countryCode,
                    "source":"https://thevirustracker.com/singapore-coronavirus-information-sg"
                 },
                 "total_cases":5050,
                 "total_recovered":708,
                 "total_unresolved":0,
                 "total_deaths":11,
                 "total_new_cases_today":0,
                 "total_new_deaths_today":0,
                 "total_active_cases":4331,
                 "total_serious_cases":22,
                 "total_danger_rank":41,
                 "isPinned": false
            };
            return state.concat(newCountry);
        }
        case REMOVE_COUNTRY: {
            const { countryCode } = payload;
            return state.filter(country => country.info.code !== countryCode);
        }
        case PIN_COUNTRY: {
            const { countryCode } = payload;
            return state.map(country => {
                if(country.info.code === countryCode) {
                    return { ...country, isPinned: true };
                }
                return country;
            });
        }
        case LOAD_COUNTRY_SUCCESS: {
            if(payload.countries.results && payload.countries.results[0].data === "none") {
                alert("Invalid Country Code!");
                return state;
            }
            const apiCountry = payload.countries.countrydata[0];
            const newCountry = {...apiCountry, isPinned: false};
            return state.concat(newCountry);
        }
        case LOAD_COUNTRY_IN_PROGRESS:
        case LOAD_COUNTRY_FAILURE:
        default: {
            return state;
        }
    }
}