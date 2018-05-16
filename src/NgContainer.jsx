import React, { Component } from 'react';

const NgContainer = ({ children }) => children

class Break extends Component {
  
  render() {
    return <NgContainer>
      <li> hi </li>
      <li> hi </li>
      <li> hi </li>
      <li> hi </li>
      <li> hi </li>
    </NgContainer>
  }
}

export default Break