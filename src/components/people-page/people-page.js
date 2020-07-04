import React, {Component} from 'react';

import ItemList from '../item-list/';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicatior'
import SwapiService from '../../services/swapi-service'

import Row from '../row';

import ErrorBoundry from '../error-boundry'


export default class PeoplePage extends Component {

swapiService = new SwapiService()

  state = {
    selectedPerson: 3,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson})
  }

  render () {

    if (this.state.hasError) {
      return (
        <ErrorIndicator/>
      )
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

  const personDetails = (
    <ErrorBoundry>
         <ItemDetails
              itemId ={this.state.selectedPerson}
              getData={this.swapiService.getPerson}/>
    </ErrorBoundry>
  )

    return (
      // <div className="row mb-2">
      //   <div className="col-md-6">
      //     {itemList}
      //   </div>
      //   <div className="col-md-6">
      //     {personDetails}
      //   </div>
      // </div>

      <div>

          <Row left ={itemList} right = {personDetails}/>

      </div>
    )

  }
}
