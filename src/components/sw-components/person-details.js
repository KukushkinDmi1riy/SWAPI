import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import {withSwapiService} from '../hoc-helpers'


const swapiService = new SwapiService();

const PersonDetails =(props) =>{


  return (
          <ItemDetails{...props}>
            <Record field="gender" label = "Gender" />
            <Record field="eyeColor" label = "Eye Color" />
          </ItemDetails>
          )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getUrlImg: swapiService.getPersonImg
  }
};


export default withSwapiService(PersonDetails, mapMethodsToProps);