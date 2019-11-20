import React from 'react';
import Number from './Number';

const Numbers = ({ persons, onRemove }) => {
    const entries = persons.map(p => <Number key={p.name} entry={p} onRemove={onRemove}/>)

    return (
        <>
            <h2>Numbers</h2>
            {entries}
        </>
    );
};

export default Numbers;