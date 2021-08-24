import './App.css';
import Navbar from './components/Navbar';
import GeneralInformation from './components/GeneralInformation';
import Education from './components/Education';
import Experience from './components/Experience';
import CvItemsList from './components/CvItemsList';

const App = () => {
  let CvInfo = [];

  const savedGeneralInfoHandler = (enteredGiData) => {
    CvInfo = [{...enteredGiData}];
  }

  return (
    <div className="App">
      <Navbar />
      <GeneralInformation savedGeneralInfo={savedGeneralInfoHandler} />
      <Education />
      <Experience />
      <CvItemsList />
    </div>
  );
}

export default App;
