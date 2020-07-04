
import React from 'react';
import ItemList from '../item-list';

import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;


const withChildFunction = (Wrapped, fn) => {
  return (props) =>{
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

const renderItem = ({name})=> (<span> {name}</span>)

const PersonList = withData(
                        withChildFunction(ItemList, renderItem),
                        getAllPeople
                        );

const PlanetList = withData(
                        withChildFunction(ItemList, renderItem),
                        getAllPlanets);

const StarshipList = withData(
                        withChildFunction(ItemList, renderItem),
                        getAllStarships)


export {
  PersonList,
  PlanetList,
  StarshipList
};