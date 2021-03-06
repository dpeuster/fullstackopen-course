import React from 'react';
import Country from './Country';
import CountryResult from './CountryResult';

const CountryResults = ({ countries, filter }) => {
    const filterCountries = (countries, filter) => countries.filter(({ name }) => matchFilter(name, filter));

    const matchFilter = (name, filter) => name.toLowerCase().includes(filter.toLowerCase());

    const filteredCountries = filterCountries(countries, filter);

    if (filteredCountries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        );
    }

    if (filteredCountries.length === 1) {
        return (
            <Country country={filteredCountries[0]} />
        )
    }

    return (
        <ul>
            {filteredCountries.map(country => 
                <CountryResult key={country.numericCode} country={country}/>
            )} 
        </ul>
    );
};

export default CountryResults;