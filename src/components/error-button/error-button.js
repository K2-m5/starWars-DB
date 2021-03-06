import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      return;
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({renderError: true})}>
        Error
      </button>
    );
  }
}
