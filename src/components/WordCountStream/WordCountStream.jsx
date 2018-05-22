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
    for await (const topWordTups of stream) {
      if (!this.__isMounted) break

      this.setState({ topWordTups })
      await sleep(2)
    }
  }

  renderTopWord([word, count]) {
    return <li key={word}>{`${word} - ${count}`}</li>
  }

  render() {
    const { topWordTups } = this.state

    return topWordTups ? <ul>
      {topWordTups.map(this.renderTopWord)}
    </ul>
      : null
  }
}