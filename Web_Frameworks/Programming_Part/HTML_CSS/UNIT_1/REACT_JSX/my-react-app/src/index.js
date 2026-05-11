import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const myElement=<h1>I like JSX REACT!</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement)

// const x=4;
// let text='GoodBye'
// if (x<10){
//   text="hello from react"
// }
// const myElement=<h1>{text}</h1>
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement)

// const x=125;
// const myElement=<h1>{x<10 ? "Hello React" : "Good Bye React "}</h1>

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
