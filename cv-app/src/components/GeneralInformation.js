const GeneralInformation = () => {
    return (
        <div>
            <label htmlFor="fname">First Name:</label>
            <input id="fname" type="text" />
            <label htmlFor="lname">Last Name:</label>
            <input id="lname" type="text" />
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" />
            <label htmlFor="phonenumber">Telephone Number:</label>
            <input id="phonenumber" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        </div>
    ); 
};

export default GeneralInformation;