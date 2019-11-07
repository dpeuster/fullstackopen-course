import React from 'react';
import Number from './Number';

const Numbers = ({ persons }) => {
    const entries = persons.map(p => <Number key={p.name} name={p.name} number={p.number}/>)

    return (
        <>
            <h2>Numbers</h2>
            {entries}
        </>
    );
};

export default Numbers;