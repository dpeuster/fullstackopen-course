import React, { useState } from 'react';
import Country from './Country';

const CountryResult = ({ country }) => {
    const [ showDetails, setShowDetails ] = useState(false);
    const [ toggleButtonText, setToggleButtonText ] = useState('show');

    const toggle = () => {
        setShowDetails(!showDetails);

        if (showDetails) {
            setToggleButtonText('show');
        }
        else {
            setToggleButtonText('hide');
        }
    };

    const detailView = () => {
        if (!showDetails) return;

        return (
            <Country country={country} />
        );
    }

    return (
        <li>
            {country.name} <button onClick={toggle}>{toggleButtonText}</button>
            {detailView()}
        </li>
    );
};

export default CountryResult;