import React, { useState } from 'react';

const App = () => {
  const api = 'https://restcountries.eu/rest/v2/all';

  const [ filter, setFilter ] = useState('');

  const onFilterChanged = ({ target: { value } }) => {
    setFilter(value);
  }

  return (
    <div>
      find countries <input value={filter} onChange={onFilterChanged} />
    </div>
  );
}

export default App;
