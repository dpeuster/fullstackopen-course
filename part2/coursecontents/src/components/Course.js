import React from 'react';

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

export default Course;