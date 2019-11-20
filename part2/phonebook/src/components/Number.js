import React from 'react';

const Number = ({ entry, onRemove }) => {
    const remove = () => {
        onRemove(entry.id);
    };

    return (
        <li>{entry.name} {entry.number} <button onClick={remove}>remove</button></li>
    );
};

export default Number;