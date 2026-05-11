import logo from './logo.svg';
import './App.css';
import Greeting from '../src/Components/Greetings_functional_learn.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           <h1> Hi MAN WELCOME TO THE REACT JS AND HERE IS WHERE THE REAL WEB DEV</h1>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function App() {
//   return <h1> WE ALL LIKE JSX AND YES WE CAN DO IT BETTER</h1>
// }

function App() {
  return <div className="App"><h1> WE ALL LIKE JSX AND YES WE CAN DO IT BETTER</h1>
  <Greeting />
  </div>
}

export default App;
