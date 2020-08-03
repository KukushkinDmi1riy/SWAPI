
import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

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

const mapPersonMethodsToProps = (swapiService)=> {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService)=> {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarshipMethodsToProps = (swapiService)=> {
  return {
    getData: swapiService.getAllStarships
  }
}
const PersonList = withSwapiService (
                    withData(
                        withChildFunction(ItemList, renderItem)
                        ), mapPersonMethodsToProps);

const PlanetList = withSwapiService (
                    withData(
                        withChildFunction(ItemList, renderItem)
                        ),mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                      withData(
                          withChildFunction(ItemList, renderItem),
                          ),mapStarshipMethodsToProps)


export {
  PersonList,
  PlanetList,
  StarshipList
};