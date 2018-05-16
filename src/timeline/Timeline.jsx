import React, { Component } from 'react';
import { Searchbox } from './Searchbox'
import { fetch } from '../services'
import { ResultSet } from './ResultSet'

export class Timeline extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: [],
      moreResults: false
    }

    this.fetchResults = this.fetchResults.bind(this)
  }

  handleSubmit = value => {
    this.setState({
      results: [],
      moreResults: false,
      query: fetch(value)
    }, () => {
      this.fetchResults()
    })
  }

  async fetchResults() {
    const { query } = this.state
    const response = await query.next()
    this.handleQueryResponse(response)
  }


  handleQueryResponse = ({ value, done }) => {
    const { results } = this.state
    this.setState({
      results: [...results, ...value],
      moreResults: !done
    })
  }


  render() {
    const { handleSubmit, fetchResults } = this
    const { results, moreResults } = this.state

    return <div>
      <Searchbox onSubmit={handleSubmit} />
      <button onClick={fetchResults} disabled={!moreResults}>More results</button>
      <ResultSet results={results} />
    </div>
  }
}
