import React from 'react';
import Weather from './Weather';

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <img alt={country.name} src={country.flag} width="250" />
            <p>
                capital: {country.capital}
                <br />
                population: {country.population}
            </p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <Weather cityName={country.capital}  />
        </div>
    );
};

export default Country;