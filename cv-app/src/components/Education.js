const Education = () => {
    return (
        <div>
            <label htmlFor="school-name">School Name:</label>
            <input id="school-name" type="text" />
            <label htmlFor="title-of-study">Title of Study:</label>
            <input id="title-of-study" type="text" />
            <label htmlFor="graduation-date"></label>
            <input id="graduation-date" type="date" />
        </div>
    );
};

export default Education;