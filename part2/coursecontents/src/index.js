import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    );
}

const Content = ({parts}) => {
    const partsHtml = () => parts.map(p => <Part key={p.id} part={p}/>); 

    return partsHtml();
};

const Total = ({parts}) => {
    let exerciseCounts = parts.map(part => part.exercises);
    let sum = exerciseCounts.reduce((prev, exercises) => prev + exercises);

    return (
        <b>total of {sum} exercises</b>
    );
};

const Course = ({course}) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    );
}

const App = () => {
    const courses =  [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ];

    const coursesHtml = courses.map(c => <Course key={c.id} course={c}/>);

    return (
        <div>
            {coursesHtml}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));