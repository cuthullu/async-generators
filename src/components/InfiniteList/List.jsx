import React, { Component } from 'react'

export class List extends Component {

  renderItem(item, i) {
    return <li key={i}> {item} </li>
  }

  render() {
    const { renderItem } = this
    const { items } = this.props
    return items ?
      <ul>
        {items.map(renderItem)}
      </ul>
      : null
  }
}