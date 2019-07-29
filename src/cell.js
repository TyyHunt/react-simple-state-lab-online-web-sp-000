import React, { Component } from 'react';

export default class Cell extends React.component {
  constructor() {
    super()
    this.state = {
      color: this.props.value
    }
  }

  increment = () => {
    const newCount = this.state.color + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <div onClick={this.increment}>
        {this.state.count}
      </div>
    )
  }

}
