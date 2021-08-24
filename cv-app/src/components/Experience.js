import React, { useState } from 'react';

const Experience = () => {
    const [enteredCompanyName,setEnteredCompanyName] = useState('');
    const [enteredPosition,setEnteredPosition] = useState('');
    const [enteredStartDate,setEnteredStartDate] = useState('');
    const [enteredEndDate,setEnteredEndDate] = useState('');

    const setCompanyNameHandler = (event) => {
        setEnteredCompanyName(event.target.value);
        console.log(enteredCompanyName);
    };


    const setPositionHandler = (event) => {
        setEnteredPosition(event.target.value);
        console.log(enteredPosition);
    };


    const setStartDateHandler = (event) => {
        setEnteredStartDate(event.target.value);
        console.log(enteredStartDate);
    };


    const setEndDateHandler = (event) => {
        setEnteredEndDate(event.target.value);
        console.log(enteredEndDate);
    };

    return (
        <div>
            <label htmlFor="company-name">Company Name:</label>
            <input id="company-name" type="text" value={enteredCompanyName} onChange={setCompanyNameHandler} />
            <label htmlFor="position-title">Position Title</label>
            <input id="position-title" type="text" value={enteredPosition} onChange={setPositionHandler} />
            <label htmlFor="start-date">Date Started</label>
            <input id="start-date" type="date" value={enteredStartDate} onChange={setStartDateHandler} />
            <label htmlFor="end-date">Date End</label>
            <input id="end-date" type="date" value={enteredEndDate} onChange={setEndDateHandler} />
        </div>
    );
};

export default Experience;