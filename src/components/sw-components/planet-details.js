import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import {SwapiServiceConsumer} from '../swapi-service-context';
import {withSwapiService} from '../hoc-helpers'

const swapiService = new SwapiService();


const PlanetDetails =(props) => {
        return (
            <ItemDetails {...props}>
              <Record field="population" label = "Population" />
              <Record field="rotationPeriod" label = "Rotation Period" />
              <Record field="diameter" label = "Diameter" />
            </ItemDetails>
          );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getUrlImg: swapiService.getPlanetImg
  }
 }


export default withSwapiService(PlanetDetails, mapMethodsToProps);