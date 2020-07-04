
export default class SwapiService {

  _apiBase = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img"

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error (`Could not fetch ${url} status ${res.status}`)
    }
    return await res.json()
  };

  getAllPeople = async () => {
    const res = await this.getResource (`/people/`)
    return res.results.map(this._transfrormPerson)
  };

  getPerson = async (id) => {
    const person = await this.getResource (`/people/${id}`)
    return this._transfrormPerson(person)
  };

  getPersonImg = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

   getAllPlanets = async () => {
    const res = await this.getResource (`/planets/`)
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource (`/planets/${id}`)
    return this._transformPlanet(planet)
  };
  getStarShipImg = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };
  getAllStarships = async () => {
    const res = await this.getResource (`/starships/`)
    return res.results.map(this._transformSpaceship)
  };

  getStarship = async (id) => {
    const starShip = await  this.getResource (`/starships/${id}`)
    return this._transformSpaceship(starShip);
  };

  getPlanetImg = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };


  _extractId = (item) =>{
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

  _transformSpaceship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer ,
      costInCredits : starship.cost_in_credits ,
      length : starship.length ,
      crew: starship.crew,
      passengers : starship.passengers ,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transfrormPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear:  person.birth_year,
      eyeColor: person.eye_color
    }
  }

}





// const swapi = new SwapiService();

// swapi.getAllPeople().then((res)=> {
//   res.forEach((p) => {
//     console.log(p.name);

//   })
// })

// swapi.getPerson(1).then((p)=> {
//     console.log(p);
// })


// swapi.getPlanet(3).then((plt)=> {
//   console.log(plt);

// })
