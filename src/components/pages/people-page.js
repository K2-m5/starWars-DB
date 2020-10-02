import React, { Component } from 'react';
import Row from '../row';
import { PersonDetails, PersonList } from '../sw-components';

export default class PeoplePage extends Component {

  state = {
    selectItem: null,
  };

  onItemSelected = (selectItem) => {
    this.setState({ selectItem });
  }

  render() {
    const { selectItem } = this.state
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDetails itemId={selectItem}/>}
      />
    );
  }
}
