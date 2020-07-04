import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImg,
  getStarShipImg,
  getPlanetImg
} = swapiService;

const PersonDetails =({itemId}) =>{
    return (
      <ItemDetails
              itemId = {itemId}
              getData={getPerson}
              getUrlImg = {getPersonImg}
              >
              <Record field="gender" label = "Gender" />
              <Record field="eyeColor" label = "Eye Color" />
        </ItemDetails>
    );
};

const PlanetDetails =({itemId}) => {
  return (
    <ItemDetails
      itemId ={itemId}
      getData={getPlanet}
      getUrlImg = {getPlanetImg}
      >
      <Record field="population" label = "Population" />
      <Record field="rotationPeriod" label = "Rotation Period" />
      <Record field="diameter" label = "Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId ={itemId}
      getData={getStarship}
      getUrlImg = {getStarShipImg}
      >
      <Record field="length" label = "Length" />
      <Record field="costInCredits" label = "Cost" />
    </ItemDetails>
  );

};


export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};