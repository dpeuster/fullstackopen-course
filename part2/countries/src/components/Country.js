import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
    const [ weather, setWeather ] = useState({});

    const weatherApiKey = 'b9c2fb61a4c3fbbe5af73adabb138c09';
    const weatherApiLink = `http://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}&q=`;

    useEffect(() => {
        axios
            .get(`${weatherApiLink}${country.capital}`)
            .then(({ response: { data }}) => {
                setWeather(data);

                console.log(data);
            })
    }, []);

    return (
        <div>
            <h1>{country.name}</h1>
            <p>
                capital: {country.capital}
                <br />
                population: {country.population}
            </p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} width="250" />
        </div>
    );
};

export default Country;