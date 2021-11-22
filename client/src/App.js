import { useSelector } from 'react-redux';
import './App.css';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import ThanksCard from './components/ThanksCard/ThanksCard';

function App() {
  const time = new Date().getHours()
  const order = useSelector((state)=> state.order)
  return (
    <div className="App" id={time > 6 && time  < 18 ? "day" : "night"}>
     {order.user !== null && order.order !== null ? <ThanksCard/> : <ApplicationForm/>}
    </div>
  );
}

export default App;
