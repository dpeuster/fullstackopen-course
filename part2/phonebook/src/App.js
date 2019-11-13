import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Numbers from './components/Numbers';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
    const [ persons, setPersons ] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data);
            })
    }, []);

    const [ filter, setFilter ] = useState('');

    const onFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    const submitNewName = (entry) => {
        if (isPersonAdded(entry)) return;

        setPersons(persons.concat(entry));
    }

    const isPersonAdded = ({ name }) => {
        if (persons.findIndex(p => p.name === name) > -1) {
            alert(`${name} is already added to the phonebook`);
            return true;
        }

        return false;
    }

    return (
        <div>
    	    <h2>Phonebook</h2>
            <Filter onChange={onFilterChange} />
            <h2>add a new entry</h2>
            <PersonForm onSubmit={submitNewName} />
            <Numbers persons={persons.filter(p => p.name.includes(filter))}/>
        </div>
    );
};

export default App;