import React, { Component } from 'react'

export class ResultSet extends Component {

  printResult(result, i) {
    return <li key={i}> {result} </li>
  }

  render() {
    const { printResult } = this
    const { results } = this.props
    return results ?
      <ul>
        {results.map(printResult)}
      </ul>
      : null
  }
}