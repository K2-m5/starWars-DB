import React, { Component } from 'react';
import Row from '../row';
import { StarshipDetails, StarshipList } from '../sw-components';

export default class StarShipPage extends Component {

  state = {
    selectItem: null,
  };

  onItemSelected = (selectItem) => {
    this.setState({ selectItem });
  }

  render() {
    const { selectItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected}/>}
        right={<StarshipDetails itemId={selectItem}/>}
      />
    );
  }
}
