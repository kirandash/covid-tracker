import { createSelector } from 'reselect';

export const getCountries = state => state.countries;

export const getIsLoading = state => state.isLoading;

export const getPinnedCountries = createSelector(
    getCountries,
    (countries) => countries.filter(country => country.isPinned)
);

export const getNotPinnedCountries = createSelector(
    getCountries,
    (countries) => countries.filter(country => !country.isPinned)
);