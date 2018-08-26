import React, { Component } from 'react';
import { PaperContainer, SearchComponent } from '../Components/index';
import '../App.css';

const App = _ => {
  return (
    <div>
      <div id='cardContainer' >
        <div id='searchComponentContainer'>
          <SearchComponent />
        </div>
        <PaperContainer />
      </div>
    </div>
  );
}

export default App;
