import React, { Component } from 'react';

const NgContainer = ({ children }) => children
//   console.log('dddd')
//   return <p> {children </p>

// }

function* gen() {
  let i = 0
  while(true) {
    if(i < 10) {
      yield "hi" + i 
    }else {
      return 
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tom</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to sdave.
        </p>
        <Break> <li> bye </li> <li> hi </li>  </Break>
      </div>
    );
  }
}


class Break extends Component {
  
  render() {
    const arr = [...gen()]
    return <NgContainer>
      <li> {arr} </li>
      <li> hi </li>
      <li> hi </li>
      <li> hi </li>
      <li> hi </li>
      <li> hi </li>
    </NgContainer>
  }
}

export default App;
