import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../../components/error-indicatior'

import './random-planet.css';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  }

  constructor(){
    super();
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet)=> {
    this.setState({
      planet,
      loading: false})
  }

  onError = ()=> {
    this.setState({
      error: true,
      loading: false})
  };

  updatePlanet = () => {
    console.log("update");

    const id=Math.floor(Math.random()*15+1);
    this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError)


  }

  render() {
    const { planet, loading, error } = this.state;

    const showPlanet = !(loading || error)

    const spinner = loading ? <Spinner/> : null;
    const planetView = showPlanet ? <PanelView planet={planet}/> : null
    const err = error ? <ErrorIndicator/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {planetView}
        {err}
      </div>

    );
  }
}


const PanelView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet
  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}