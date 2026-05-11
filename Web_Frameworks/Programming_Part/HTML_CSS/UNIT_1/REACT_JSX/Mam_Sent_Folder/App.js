/*Project Structure
 src/
   ├── App.js
   ├── BookTable.js
   └── BookRow.js
(App.js: Root Component)
App.js: Holds data and passes it to child component */ 

import React from "react";
import BookTable from "./components/BookTable";

import './App.css';

function App() {
  const books = [
    {
      isbn: '978-0-262-13472-9',
      title: "React Basics",
      author: "Dan Abramov",
      price: 499,
      published: new Date('2017-11-30')
    },
    {
      isbn: '978-1-59327-950-9',
      title: "JavaScript Essentials",
      author: "Brendan Eich",
      price: 399,
      published: new Date('2019-07-15')
    }
  ];

  return (
    <div className="App">
      <header className="App-header"> 
      <h3>Book Store</h3>
      </header>
      <BookTable books={books} />
    </div>
  );
}

export default App;

/* Data Flow
App.js  →  BookTable.js  →  BookRow.js
   ↓           ↓               ↓
 books     books.map()     book.property
*/