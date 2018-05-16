import React, { Component } from 'react';
import { Timeline } from './timeline'
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Toms dev environment</h1>
        </header>
        <div>
          <Timeline> </Timeline>
        </div>

      </div>

    );
  }
}



export default App;
