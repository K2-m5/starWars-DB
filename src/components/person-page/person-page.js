import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../erorr-indicator';
import SwapiService from '../../services';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './person-page.css';

export default class PersonPage extends Component {

  swapiService = new SwapiService();

  state = {
    id: 1,
    hasError: false
  };

  componentDidCatch(error, info) {
    debugger;

    this.setState({
      hasError: true
    });
  }

  onItemSelected = (id) => {
    this.setState({
      id: id
    });
    console.log(this.state.id);
  }

  render() {

    const itemList = (
      <ItemList
          onItemSelected={this.onItemSelected}
          getData={this.swapiService.getAllPeople}>

          {(i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails id={this.state.id} />
      </ErrorBoundry>
    )

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <Row left={itemList} right={itemDetails} />);
  }
}
