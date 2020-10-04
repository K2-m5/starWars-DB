import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';


const withSwapiService = (mapServiceToProps) => (Wrapped) => {

  return (props) => {
    return (<SwapiServiceConsumer>
      {
        (swapiService) => {
          const serviceProps = mapServiceToProps(swapiService);

          return(
            <Wrapped {...props} {...serviceProps}/>
          )
        }
      }
    </SwapiServiceConsumer>)
  }
}

export default withSwapiService;