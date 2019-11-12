import React, { useState } from 'react';
import Numbers from './components/Numbers';

const App = () => {
    const [ persons, setPersons ] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567'
        },
        {
            name: 'Test test',
            number: '123456789'
        }
    ]);

    const [ newName, setNewName ] = useState('');
    const [ newNumber, setNewNumber ] = useState('');
    const [ filter, setFilter ] = useState('');

    const handleNewNameChange = (event) => setNewName(event.target.value);
    const handleNewNumberChange = (event) => setNewNumber(event.target.value);
    
    const handleFilterChange = (event) => setFilter(event.target.value);

    const submitNewName = (event) => {
        event.preventDefault();

        const newEntry = {
            name: newName,
            number: newNumber
        };

        if (isPersonAdded(newEntry)) return;

        setPersons(persons.concat(newEntry));
    }

    const isPersonAdded = ({ name }) => {
        if (persons.findIndex(p => p.name === name) > -1) {
            alert(`${newName} is already added to the phonebook`);
            return true;
        }

        return false;
    }


    return (
        <div>
    	    <h2>Phonebook</h2>
            filter shown with <input value={filter} onChange={handleFilterChange}/>
            <h2>add a new entry</h2>
            <form onSubmit={submitNewName}>
                <div>
                    <p>
                        name: <input value={newName} onChange={handleNewNameChange}/>
                    </p>
                    <p>
                        number: <input value={newNumber} onChange={handleNewNumberChange}/>
                    </p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <Numbers persons={persons.filter(p => p.name.includes(filter))}/>
        </div>
    );
};

export default App;