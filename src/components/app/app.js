import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    personId: 1
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      personId: id
    });
    console.log(this.state.personId);
  }

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return (
      <div>
      <Header />
      { planet }

      <button
        className='toggle-planet btn btn-warning btn-lg'
        onClick={this.toggleRandomPlanet}>
        Toggle panel planet
      </button>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
          onPersonSelected={this.onPersonSelected}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.personId} />
        </div>
      </div>
    </div>
    );
  }
};
