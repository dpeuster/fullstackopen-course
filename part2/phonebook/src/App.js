import React, { useState, useEffect } from 'react';
import './index.css';
import personService from './services/persons';
import Numbers from './components/Numbers';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
    const [ persons, setPersons ] = useState([]);
    const [ filter, setFilter ] = useState('');
    const [ notification, setNotification ] = useState({ message: null, type: null })

    const getPersons = () => {
        personService
            .getAll()
            .then(data => {
                setPersons(data);
            });
    };

    useEffect(getPersons, []);

    const onFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const submitNewName = (entry) => {
        if (isPersonAdded(entry)) {
            updateEntry(entry);

            return;
        }

        personService.create(entry).then(addPersonToLocalList);
    };

    const isPersonAdded = ({ name }) => {
        return persons.findIndex(p => p.name === name) > -1;
    };

    const updateEntry = (entry) => {
        if (window.confirm(`${entry.name} is already added to the phonebook. Do you want to replace the number?`)) {
            const existingEntry = persons.find(person => person.name === entry.name);
            const changedEntry = { ...entry, id: existingEntry.id };

            personService.update(changedEntry).then(updatePersonInLocalList);
        }
    };

    const updatePersonInLocalList = (entry) => {
        const newList = persons.map(person => person.id !== entry.id ? person : entry);

        setPersons(newList);

        displaySuccessNotification(`Changed ${entry.name}s number`);
    };

    const addPersonToLocalList = (entry) => {
        const newList = persons.concat(entry);

        setPersons(newList);

        displaySuccessNotification(`Added ${entry.name}`);
    };

    const displaySuccessNotification = (message) => {
        setNotification({ message, type: 'success' });
        setTimeout(() => setNotification({ message: null, type: null }), 5000);
    };

    const removeEntry = (id) => {
        if (window.confirm("Do you really want to delete this entry?")) {
            personService.remove(id).then(() => removePersonFromLocalList(id));
        }
    };

    const removePersonFromLocalList = (id) => {
        const newList = persons.filter(person => person.id !== id);

        setPersons(newList);
    };

    return (
        <div>
    	    <h2>Phonebook</h2>
            <Notification type={notification.type} message={notification.message} />
            <Filter filter={filter} onChange={onFilterChange} />
            <h2>add a new entry</h2>
            <PersonForm onSubmit={submitNewName} />
            <Numbers persons={persons.filter(p => p.name.includes(filter))} onRemove={removeEntry}/>
        </div>
    );
};

export default App;