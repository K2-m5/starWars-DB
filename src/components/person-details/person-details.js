import React, { Component, Fragment } from 'react';
import SwapiService from '../../services';
import ErrorButton from '../error-button';
import ErrorIndicator from '../erorr-indicator';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true,
    error: false
  }

  updatePerson() {
    const { personId } = this.props;

    if(!personId) {
      return;
    }

    this.swapiService.getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  };

  onPersonLoaded = (person) => {
    this.setState({
      person,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      loading: false,
      error: true
    })
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {

    if (!this.state.person) {
      return <span>Select person</span>
    }

    const { loading, person, error } = this.state;

    const hasData = !(error || loading);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonDetailsView person={person} /> : null;

    return (
      <div className="person-details card">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const PersonDetailsView = ({ person }) => {

  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
        alt='hero'/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">birthday year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </Fragment>
  );
};