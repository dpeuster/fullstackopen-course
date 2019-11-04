import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

const Statistics = (props) => {
    const {good, neutral, bad, all, average, positive} = props;

    let content;

    if (good < 1 && neutral < 1 && bad < 1) {
        content = <p>No feedback given</p>;
    }
    else {
        content = (
            <>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
                <p>all {all}</p>
                <p>average {average}</p>
                <p>positive {positive}</p>
            </>
        );
    }

    return (
        <div>
            <h1>statistics</h1>
            {content}
        </div>
    );
};

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increaseGood = () => setGood(good + 1);
    const increaseNeutral = () => setNeutral(neutral + 1);
    const increaseBad = () => setBad(bad + 1);

    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = good / all * 100;

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => increaseGood()} text="good"/>
            <Button onClick={() => increaseNeutral()} text="neutral"/>
            <Button onClick={() => increaseBad()} text="bad"/>
            <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));