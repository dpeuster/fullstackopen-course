import React, { useState } from 'react';

const PersonForm = ({onSubmit}) => {
    const [ name, setName ] = useState('');
    const [ number, setNumber ] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleNumberChange = (event) => setNumber(event.target.value);

    const submitEntry = (event) => {
        event.preventDefault();

        const entry = {
            name,
            number
        };

        onSubmit(entry);
    };

    return (
        <form onSubmit={submitEntry}>
            <div>
                <p>
                    name: <input value={name} onChange={handleNameChange}/>
                </p>
                <p>
                    number: <input value={number} onChange={handleNumberChange}/>
                </p>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;