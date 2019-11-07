import React, { useState } from 'react';
import Numbers from './components/Numbers';

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ]);

    const [ newName, setNewName ] = useState('');

    const numbers = persons.map(p => <li key={p.name}>{p.name}</li>);

    const handleNewNameChange = (event) => setNewName(event.target.value);
    const submitNewName = (event) => {
        event.preventDefault();

        const newEntry = { name: newName };

        setPersons(persons.concat(newEntry));
    }


    return (
        <div>
    	    <h2>Phonebook</h2>
            <form onSubmit={submitNewName}>
                <div>
                    name: <input value={newName} onChange={handleNewNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <Numbers numbers={numbers}/>
        </div>
    );
};

export default App;