import React, { useState } from 'react';

const Education = () => {
    const [enteredSchoolName,setEnteredSchoolName] = useState('');
    const [enteredStudy,setEnteredStudy] = useState('');
    const [enteredGradDate,setEnteredGradDate] = useState('');

    const setSchoolNameHandler = (event) => {
        setEnteredSchoolName(event.target.value);
        console.log(enteredSchoolName)
    };

    const setStudyHandler = (event) => {
        setEnteredStudy(event.target.value);
        console.log(enteredStudy)
    };

    const setGradDateHandler = (event) => {
        setEnteredGradDate(event.target.value);
        console.log(enteredGradDate)
    };
 
    return (
        <div>
            <label htmlFor="school-name">School Name:</label>
            <input id="school-name" type="text" value={enteredSchoolName} onChange={setSchoolNameHandler} />
            <label htmlFor="title-of-study">Title of Study:</label>
            <input id="title-of-study" type="text" value={enteredStudy} onChange={setStudyHandler} />
            <label htmlFor="graduation-date"></label>
            <input id="graduation-date" type="date" value={enteredGradDate} onChange={setGradDateHandler} />
        </div>
    );
};

export default Education;