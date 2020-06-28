import React from 'react'

import "./error-indicator.css"
import icon from "./death-star.png"

const ErrorIndicator = () => {

  return (
    <div className= "err-msg">
      <img src={icon} alt="file not found"/>
      <h4 className= "err-text err-msg-title">Sorry!</h4>
      <span className= "err-text err-msg-body">Something wrong!</span>
      <span className= "err-text err-msg-body">We send droid to fix it!</span>
    </div>
  )
}

export default ErrorIndicator;