import React, { useState } from 'react';
import Numbers from './components/Numbers';

const App = () => {
    const [ persons, setPersons ] = useState([
        {
            name: 'Arto Hellas',
            number: '040-1234567'
        }
    ]);

    const [ newName, setNewName ] = useState('');
    const [ newNumber, setNewNumber ] = useState('');

    const handleNewNameChange = (event) => setNewName(event.target.value);
    const handleNewNumberChange = (event) => setNewNumber(event.target.value);

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
            <Numbers persons={persons}/>
        </div>
    );
};

export default App;