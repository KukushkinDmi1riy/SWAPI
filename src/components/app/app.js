
import React, {Component} from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet'
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service'
import Row from "../row"

import {PeoplePage, PlanetPage, StarshipPage} from '../pages'

import {SwapiServiceProvider} from '../swapi-service-context';

import './app.css';
import ErrorIndicator from '../error-indicatior'

export default class App extends Component {



  state = {
    hasError: false,
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({swapiService})=>{
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService
      return {
        swapiService: new Service()
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

    return (
      <div className="stardb-app">
        <SwapiServiceProvider value = {this.state.swapiService}>
          <Header onServiceChange = {this.onServiceChange}/>

          <RandomPlanet/>
          <PeoplePage/>
          <PlanetPage/>
          <StarshipPage/>

        </SwapiServiceProvider>


     </div>
    )
  }
};



