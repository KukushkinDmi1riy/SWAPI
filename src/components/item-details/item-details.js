import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './person-details.css';
import Spinner from '../spinner/spinner';
// import ErrorIndicator from '../error-indicatior'
import ErrorButton from "../error-button"


const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
     </li>
  )
};

export {
  Record
}

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    const {getUrlImg} = this.props
    this.setState({
      item,
      loading: false,
      image: getUrlImg(item)
    });
  };

  updateItem() {
    const {getData, itemId} = this.props
    if (!itemId) {
      return;
    }

    this.setState({
      loading: true
    });

    getData(itemId)
      .then(this.onItemLoaded);


  }

  render() {
    const { item, loading, image } = this.state;

    const notSelected = !item && !loading;
    const hasData = item && !loading;

    const hint = notSelected ? <span>Select a person from a list</span> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PersonView item={item} img={image} children = {this.props.children}/> : null;

    return (
      <div className="person-details card">
        { hint }
        { spinner }
        { content }
      </div>
    );
  }
}

const PersonView = ({item, img, children}) => {
  const {
    id,
    name,
    gender,
    birthDate,
    eyeColor,

  } = item;



  return (
    <React.Fragment>
      <img className="person-image"
      // src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      src = {img}
      alt={name}/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
         {
           React.Children.map(children, (child)=> {
           return React.cloneElement(child, {item})
           })
         }
        </ul>
        <ErrorButton/>
      </div>

    </React.Fragment>
  );
}