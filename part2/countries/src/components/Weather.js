import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ cityName }) => {
    const [ weather, setWeather ] = useState();

    const weatherApiKey = 'b9c2fb61a4c3fbbe5af73adabb138c09';
    const weatherApiLink = `http://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}&units=metric&q=`;

    const getWeatherFromApi = () => {
        axios
            .get(`${weatherApiLink}${encodeURI(cityName)}`)
            .then(response => setWeather(response.data))
    };

    useEffect(getWeatherFromApi, []);

    if (weather === undefined) return null;

    return (
        <>
            <h2>weather</h2>
            <b>temperature: </b><span>{weather.main.temp} celsius</span>
            <br />
            <img alt={weather.weather[0].main} style={{filter: 'invert(100%)'}} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <br />
            <b>wind: </b><span>{weather.wind.speed} kp/h {weather.wind.deg} Degrees</span>
        </>
    );
};

export default Weather;