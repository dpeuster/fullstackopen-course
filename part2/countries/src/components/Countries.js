import React from 'react';

const Countries = ({ countries }) => {
    if (countries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        );
    }
    
    return (
        <ul>
            {countries.map(country => <li key={country.numericCode}>{country.name}</li>)}
        </ul>
    );
};

export default Countries;