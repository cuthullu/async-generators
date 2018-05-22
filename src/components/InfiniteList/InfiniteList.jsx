import React, { Component } from 'react';
import { Searchbox } from './Searchbox'
import { createSubredditPaginator } from '../../services'
import { List } from './List'

export class InfiniteList extends Component {
  state = {
    pages: [],
  }

  handleSubmit = async subreddit => {
    this.paginator = createSubredditPaginator(subreddit)
    const firstPage = await this.paginator.next()

    this.setState({ pages: firstPage.value })
  }

  fetchNextPage = async () => {
    const nextPage = await this.paginator.next()

    this.setState(prevState => ({
      pages: [...prevState.pages, ...nextPage.value],
    }))
  }

  render() {
    const { handleSubmit, fetchNextPage } = this
    const { pages } = this.state

    return <div>
      <Searchbox onSubmit={handleSubmit} />

      <button onClick={fetchNextPage} disabled={!pages.length}>More results</button>
      
      <List items={pages} />
    </div>
  }
}
