import React from 'react';
import {Heading} from './components/Heading';
import Book from './components/Book';
import logo from './logo.svg';
import './App.css';

const myBook=(input:string):string =>{
  return '@' +input;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading/>
        <img src={logo} className="App-logo" alt="logo" />
       
        <Book bName="Lizards" bTitle="Fiction"  callMethod={myBook} bContent="This book is all about the Lizard Family" />
      </header>
    </div>
  );
}

export default App;
