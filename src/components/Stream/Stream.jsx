import React, { Component } from 'react';
import { streamSubreddit } from '../../services'
import { Image } from './Image'
const delay = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

export class Stream extends Component {
  state = {
    current: undefined,
  }

  componentDidMount() {
    const stream = streamSubreddit('earthporn')
    this.__isMounted = true
    this.runStream(stream)
  }

  componentWillUnmount() {
    this.__isMounted = false
  }

  runStream = async iterator => {
    for await (let current of iterator) {
      if (!this.__isMounted) break
      this.setState({ current })
      await delay(2)
    }
  }

  render() {
    const { current } = this.state

    return <Image source={current} />
  }
}