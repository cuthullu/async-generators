import React, { Component } from 'react';

export class Searchbox extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value })
  }

  handleSubmit = () => {
    const { searchValue } = this.state
    const { onSubmit } = this.props
    onSubmit(searchValue)
  }

  render() {
    const { handleSearchChange, handleSubmit } = this
    return <div>
      Search
        <input type="text" onChange={handleSearchChange} />
      <button onClick={handleSubmit} >Go</button>
    </div>

  }
}