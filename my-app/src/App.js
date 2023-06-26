import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import RelatedCompare from './Components/4 - RelatedComparison/RelatedComparison'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn REACT IASJDIOSAJI
        </a>
        
      </header>
      <RelatedCompare className='RelatedCompare'/>
    </div>
  );
}

export default App;
