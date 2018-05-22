import React, { Component } from 'react';
import { createWordCountStream } from '../../services'
const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

export class WordCountStream extends Component {
  state = {
    topWordTups: undefined,
  }

  componentDidMount() {
    this.__isMounted = true
    const stream = createWordCountStream('news')
    this.runStream(stream)
  }

  componentWillUnmount() {
    this.__isMounted = false
  }

  runStream = async stream => {
    for await (const page of stream) {
      if (!this.__isMounted) break

      this.setState({ page })
      await sleep(2)
    }
  }

  renderTopWord([word, count]) {
    return <li key={word}>{`${word} - ${count}`}</li>
  }

  render() {
    const { page } = this.state

    return page ?
      <div>
        <h3>{page.title}</h3>
        <ul>
          {page.topWordTups.map(this.renderTopWord)}
        </ul>
      </div>
      : null
  }
}