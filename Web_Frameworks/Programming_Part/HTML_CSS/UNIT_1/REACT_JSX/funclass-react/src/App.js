
import './App.css';
import Greetings from './Component/GreetingClass';
//import Greetings from './component/GreetingFunction';

function App(){
  return(
    <div className="App">
      <header className="App-header">
        {/* Remove the comments for below section*/}
        {/* <Greeting name="Srilekha"/>
        <Greeting name="Sanjai"/>
        <Greeting name="Vivek"/>
        <Greeting name="Suhash"/>*/ }

        {/*Remove the comments for below section */}
        <Greetings name="Anjali"></Greetings>   
        <Greetings name="Ravan"></Greetings>
        <Greetings name="WIWAR"></Greetings>
        <Greetings name="Roger"></Greetings>
      </header>
    </div>
  )
}

export default App;