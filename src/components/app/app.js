import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from '../person-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../erorr-indicator';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch(error, info) {
    debugger;

    this.setState({
      hasError: true
    });
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div>

        <Header />
        { planet }

        <div>
          <button
            className='toggle-planet btn btn-warning btn-lg'
            onClick={this.toggleRandomPlanet}>
            Toggle panel planet
          </button>
          <ErrorButton />
        </div>

        <PersonPage />
      </div>
    );
  }
};
