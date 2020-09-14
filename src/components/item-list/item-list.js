import React, { Component } from 'react';

import './item-list.css';

import Spinner from '../spinner';

export default class ItemList extends Component {

  state = {
    peopleList: null
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({ id, name}) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onPersonSelected(id)}>
          {name}
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state;

    if(!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
