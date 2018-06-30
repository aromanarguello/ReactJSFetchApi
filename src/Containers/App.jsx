import React, { Component } from 'react';
import { PaperContainer, SearchComponent } from '../Components/index';
import '../App.css';

class App extends Component {
  render() {
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
}

export default App;
