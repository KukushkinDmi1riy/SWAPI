
import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import PeoplePage from '../people-page';
import ItemList from '../item-list'
import ItemDetails, {Record} from '../item-details/item-details'
import SwapiService from '../../services/swapi-service'
import Row from "../row"

import './app.css';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicatior'

import { PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true,
    hasError: false
  }

  toggleRandomPlanet = () => {
    this.setState((state)=>{
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }



  componentDidCatch () {
    this.setState({hasError: true})
  }

  render(){

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> : null

      const { getPerson,
              getPersonImg,
              getStarship,
              getStarShipImg,
              getAllPeople,
              getAllPlanets } = this.swapiService

      const person = (
        <ItemDetails
              itemId ={1}
              getData={getPerson}
              getUrlImg = {getPersonImg}
              >
              <Record field="gender" label = "Gender" />
              <Record field="eyeColor" label = "Eye Color" />
        </ItemDetails>

      )

      const starship = (
        <ItemDetails
              itemId ={5}
              getData={getStarship}
              getUrlImg = {getStarShipImg}
              />

      )

      const peoplePage = (
        <PeoplePage/>
      )

    return (
      <div className="stardb-app">
        <Header/>
        {/* {planet} */}


         {/* <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div> */}

       {/* <PeoplePage/> */}




    {/* <Row left={person} right={starship}/> */}



        <PersonDetails itemId={2}/>

        <PlanetDetails itemId={2}/>

        <StarshipDetails itemId={9}/>


        <PersonList/>
        <PlanetList/>
        <StarshipList/>



     </div>
    )
  }
};



