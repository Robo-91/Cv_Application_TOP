import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GeneralInformation from './components/GeneralInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import CvItemsList from './components/CvItemsList';

const App = () => {
  let CvInfo = [];
  const [submitCvInfo, setSubmitCvInfo] = useState(false);

  const savedGeneralInfoHandler = (enteredGiData) => {
    CvInfo[0] = {...enteredGiData};
  };

  const savedEducationHandler = (enteredEdData) => {
    CvInfo[1] = {...enteredEdData};
  };

  const savedExperienceHandler = (enteredExData) => {
    CvInfo[2] = {...enteredExData};
  };

  const submitHandler = () => {
    if(CvInfo[0].fName === ""){
      alert("Please fill out the entire form before submitting");
      return null;
    } else {
      setSubmitCvInfo(true);
    }
  };

  return (
    <div className="App">
      <Navbar className="nav-wrapper" />
      <GeneralInformation savedGeneralInfo={savedGeneralInfoHandler} />
      <Education savedEducationInfo={savedEducationHandler} />
      <Experience savedExperienceInfo={savedExperienceHandler} />
      <button className="waves-effect waves-light btn-large" onClick={submitHandler}>Submit</button>
      {submitCvInfo && <CvItemsList CvData={CvInfo} isSubmitted={submitCvInfo} />}
    </div>
  );
}

export default App;
