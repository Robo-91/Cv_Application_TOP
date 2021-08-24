import './App.css';
import Navbar from './components/Navbar';
import GeneralInformation from './components/GeneralInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import CvItemsList from './components/CvItemsList';

const App = () => {
  let CvInfo = [];

  const savedGeneralInfoHandler = (enteredGiData) => {
    CvInfo[0] = {...enteredGiData};
  };

  const savedEducationHandler = (enteredEdData) => {
    CvInfo[1] = {...enteredEdData};
  };

  const savedExperienceHandler = (enteredExData) => {
    CvInfo[2] = {...enteredExData};
  };

  return (
    <div className="App">
      <Navbar />
      <GeneralInformation savedGeneralInfo={savedGeneralInfoHandler} />
      <Education savedEducationInfo={savedEducationHandler} />
      <Experience savedExperienceInfo={savedExperienceHandler} />
      <CvItemsList />
    </div>
  );
}

export default App;
