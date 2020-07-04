import React, {Component} from 'react';
import './error-boundry.css'

import ErrorIndicator from '../error-indicatior'


class ErrorBoundry extends Component {
  state ={
    hasError: false
  }


  componentDidCatch() {

    this.setState({
      hasError: true
    })
  }
  
 render (){

  if (!this.state.hasError){
    return this.props.children
  }

  return (
    <ErrorIndicator/>
  )

  }
}

export default ErrorBoundry;