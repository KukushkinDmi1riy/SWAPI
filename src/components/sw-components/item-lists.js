
import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
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
const PersonList = withSwapiService (mapPersonMethodsToProps)(
                    withData(
                      withChildFunction(renderItem)(
                        ItemList)));


const PlanetList = withSwapiService (mapPlanetMethodsToProps)(
                    withData(
                      withChildFunction(renderItem)(
                        ItemList)));


const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                      withData(
                        withChildFunction(renderItem)(
                          ItemList))); 


export {
  PersonList,
  PlanetList,
  StarshipList
};