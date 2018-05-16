import React, { Component } from 'react';
import { Searchbox } from './Searchbox'
import { fetchSubreddit } from '../../services'
import { ResultSet } from './ResultSet'

export class InfiniteList extends Component {
  state = {
    results: [],
  }

  handleSubmit = value => {
    this.setState({
      results: [],
      query: fetchSubreddit(value)
    }, () => {
      this.fetchResults()
    })
  }

  fetchResults = async () => {
    const { query, results } = this.state
    const response = await query.next()
    this.setState({
      results: [...results, ...response.value],
    })
  }

  render() {
    const { handleSubmit, fetchResults } = this
    const { results, moreResults } = this.state

    return <div>
      <Searchbox onSubmit={handleSubmit} />
      <button onClick={fetchResults} disabled={!results.length}>More results</button>
      <ResultSet results={results} />
    </div>
  }
}
