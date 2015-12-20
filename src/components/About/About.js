import React, { Component, PropTypes } from 'react';

export default class extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  render() {
    return (
      <span>This is {this.props.name}!</span>
    );
  }
}
