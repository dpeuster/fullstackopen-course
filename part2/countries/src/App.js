import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryResults from './components/CountryResults';

const App = () => {
  const api = 'https://restcountries.eu/rest/v2/all';

  const [ filter, setFilter ] = useState('');
  const [ countries, setCountries ] = useState([]);

  const getCountriesFromApi = () => {
    axios
      .get(api)
      .then(response => setCountries(response.data));
  };

  useEffect(getCountriesFromApi, []);
  
  const onFilterChanged = ({ target: { value } }) => {
    setFilter(value);
  }

  return (
    <div>
      find countries <input value={filter} onChange={onFilterChanged} />
      <CountryResults countries={countries} filter={filter} />
    </div>
  );
}

export default App;
