const CvItemsList = (props) => {
    if(props.isSubmitted === false) {
        alert("You must fill out the form first!");
        return null;
    } else {
        console.log(props.CvData);
        return (
            <div>
                <ul>
                    <li>Name: {`${props.CvData[0].fName} ${props.CvData[0].lName}`}</li>
                    <li>Email: {`${props.CvData[0].email}`}</li>
                    <li>Phone Number: {`${props.CvData[0].pNumber}`}</li>
                    <li>School Name: {`${props.CvData[1].schoolName}`}</li>
                    <li>Area of Study: {`${props.CvData[1].study}`}</li>
                    <li>Graduation Date: {`${props.CvData[1].gradDate}`}</li>
                    <li>Company Name: {`${props.CvData[2].companyName}`}</li>
                    <li>Title: {`${props.CvData[2].title}`}</li>
                    <li>Start Date: {`${props.CvData[2].startDate}`}</li>
                    <li>Leave Date: {`${props.CvData[2].endDate}`}</li>
                </ul>
                <button>Close</button>
            </div>
        );
    }
};

export default CvItemsList;