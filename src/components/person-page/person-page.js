import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../erorr-indicator';
import SwapiService from '../../services';

import './person-page.css';

export default class PersonPage extends Component {

  swapiService = new SwapiService();

  state = {
    personId: 1,
    hasError: false
  };

  componentDidCatch(error, info) {
    debugger;

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      personId: id
    });
    console.log(this.state.personId);
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList 
          onPersonSelected={this.onPersonSelected}
          getData={this.swapiService.getData}/>
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.personId} />
        </div>
      </div>
    );
  }
}
