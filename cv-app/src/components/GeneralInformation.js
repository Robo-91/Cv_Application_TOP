import React,{ useState } from "react";

const GeneralInformation = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPhoneNum, setEnteredPhoneNum] = useState('');

    const setFirstNameHandler = (event) => {
        setEnteredFirstName(event.target.value);
    };

    const setLastNameHandler = (event) => {
        setEnteredLastName(event.target.value);
    };

    const setEmailHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const setPhoneNumberHandler = (event) => {
        setEnteredPhoneNum(event.target.value);
    };

    const generalInformationData = {
        fName: enteredFirstName,
        lName: enteredLastName,
        email: enteredEmail,
        pNumber: enteredPhoneNum
    };

    props.savedGeneralInfo(generalInformationData);

    return (
        <div>
            <label htmlFor="fname">First Name:</label>
            <input id="fname" type="text" value={enteredFirstName} onChange={setFirstNameHandler} />
            <label htmlFor="lname">Last Name:</label>
            <input id="lname" type="text" value={enteredLastName} onChange={setLastNameHandler} />
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" value={enteredEmail} onChange={setEmailHandler} />
            <label htmlFor="phonenumber">Telephone Number:</label>
            <input id="phonenumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={enteredPhoneNum} onChange={setPhoneNumberHandler} />
        </div>
    ); 
};

export default GeneralInformation;