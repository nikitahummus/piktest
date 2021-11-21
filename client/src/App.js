import './App.css';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';

function App() {
  const time = new Date().getHours()
  return (
    <div className="App" id={time > 6 && time  < 18 ? "day" : "night"}>
     <ApplicationForm/>
    </div>
  );
}

export default App;
