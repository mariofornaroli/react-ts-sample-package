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
          onChange={(newVal: any) => { setSearchTextTags(newVal) }}
          placeholder={`Enter tags`}
          className="all-events-search-tags" />
      </header>
    </div>
  );
}

export default App;
