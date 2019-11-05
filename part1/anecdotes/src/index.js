import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({anecdote, votes}) => {
    return (
        <>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
        </>
    );
};

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const selectRandom = () => {
        let randomNumber = Math.round(Math.random() * (anecdotes.length - 1));

        setSelected(randomNumber);
    }

    const voteUp = (index) => {
        const copy = [...votes];

        copy[index] += 1;

        setVotes(copy);
    }

    const getMaxAnecdote = () => {
        const maxVotes = Math.max(...votes);
        
        return votes.indexOf(maxVotes);
    };

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
            <br/>
            <button onClick={() => voteUp(selected)}>vote</button>
            <button onClick={() => selectRandom()}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <Anecdote anecdote={anecdotes[getMaxAnecdote()]} votes={votes[getMaxAnecdote()]} />
        </div>
    );
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));