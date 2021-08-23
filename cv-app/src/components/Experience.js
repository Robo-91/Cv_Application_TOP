const Experience = () => {
    return (
        <div>
            <label htmlFor="company-name">Company Name:</label>
            <input id="company-name" type="text" />
            <label htmlFor="position-title">Position Title</label>
            <input id="position-title" type="text" />
            <label htmlFor="start-date">Date Started</label>
            <input id="start-date" type="date" />
            <label htmlFor="end-date">Date End</label>
            <input id="end-date" type="date" />
        </div>
    );
};

export default Experience;