import React from 'react';

const Filter = ( { filter, onChange }) => {
    const handleFilterChange = (event) => onChange(event.target.value);

    return (
        <>
            filter shown with <input value={filter} onChange={handleFilterChange}/>
        </>
    );
};

export default Filter;