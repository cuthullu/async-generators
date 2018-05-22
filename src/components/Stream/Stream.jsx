import React, { Component } from 'react';
import { createSubredditStream } from '../../services'
import { Image } from './Image'
const sleep = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

export class Stream extends Component {
  state = {
    imageUrl: undefined,
  }

  componentDidMount() {
    this.__isMounted = true
    const stream = createSubredditStream('dogpictures')
    this.runStream(stream)
  }

  componentWillUnmount() {
    this.__isMounted = false
  }

  runStream = async stream => {
    for await (const imageUrl of stream) {
      if (!this.__isMounted) break
      
      this.setState({ imageUrl })
      await sleep(2)
    }
  }

  render() {
    const { imageUrl } = this.state

    return <Image source={imageUrl} />
  }
}