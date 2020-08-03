import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceConsumer} from '../swapi-service-context';
import {withSwapiService} from '../hoc-helpers'


const swapiService = new SwapiService();

const StarshipDetails = (props) => {

  return (
            <ItemDetails {...props}>
              <Record field="length" label = "Length" />
              <Record field="costInCredits" label = "Cost" />
            </ItemDetails>
          )
};

const mapMethodsToProps = () => {
  return {
    getData: swapiService.getStarship,
    getUrlImg: swapiService.getStarShipImg
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);