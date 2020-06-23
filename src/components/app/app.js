
import React from 'react';
import Header from '../header';
import RandoPlanet from '../random-planet'
import ItemList from '../item-list/';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  return (
    <div>
      <Header/>
      <RandoPlanet/>

      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList/>
        </div>
        <div className="col-md-6">
          <PersonDetails/>
        </div>
      </div>
    </div>
  )
};

export default App;

