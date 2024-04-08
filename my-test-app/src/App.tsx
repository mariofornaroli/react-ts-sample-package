import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactInputLabels from 'react-input-labels'

function App() {
  const [searchTextTags, setSearchTextTags] = useState<any>([])
  return (
    <div className="App">
      <header className="App-header">
        <ReactInputLabels 
        values={searchTextTags}
        onChange={(newVal: any) => {setSearchTextTags(newVal)}}
        placeholder={`Enter tags`}
        className="all-events-search-tags"/>
         <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
