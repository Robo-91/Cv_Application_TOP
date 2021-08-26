import React, { useState } from 'react';

const Education = (props) => {
    const [enteredSchoolName,setEnteredSchoolName] = useState('');
    const [enteredStudy,setEnteredStudy] = useState('');
    const [enteredGradDate,setEnteredGradDate] = useState('');

    const setSchoolNameHandler = (event) => {
        setEnteredSchoolName(event.target.value);
    };

    const setStudyHandler = (event) => {
        setEnteredStudy(event.target.value);
    };

    const setGradDateHandler = (event) => {
        setEnteredGradDate(event.target.value);
    };

    const educationData = {
        schoolName: enteredSchoolName,
        study: enteredStudy,
        gradDate: enteredGradDate
    };
    
    props.savedEducationInfo(educationData);
 
    return (
        <div className="container">
            <div className="row">
                <h4>Education</h4>
                <div className="input-field col s12">
                    <label className="active" htmlFor="school-name">School Name:</label>
                    <input id="school-name" type="text" value={enteredSchoolName} onChange={setSchoolNameHandler} />
                </div>
                <div className="input-field col s12">
                    <label className="active" htmlFor="title-of-study">Title of Study:</label>
                    <input id="title-of-study" type="text" value={enteredStudy} onChange={setStudyHandler} />
                </div>
                <div className="input-field col s12">
                    <label className="active" htmlFor="graduation-date"></label>
                    <input id="graduation-date" type="date" value={enteredGradDate} onChange={setGradDateHandler} />
                </div>
            </div>
        </div>
    );
};

export default Education;