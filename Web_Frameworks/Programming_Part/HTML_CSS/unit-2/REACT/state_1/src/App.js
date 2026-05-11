import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';
import CountryAdd from './Components/CountryAdd';

function App() {
  return (
    <div className="App">
      <h3>Function and class based state Management</h3>
      <CounterFunction />
      <CounterClass />
      <CountryAdd />
    </div>
  );
}

export default App;
