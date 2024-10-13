import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faT} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


import footerLogo from "../../assets/footer_logo.png"

const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="footer_item">
      <div className="logo">
        <a href="#"><img src={footerLogo} alt="footer_logo"/></a>
      </div>
      <div className="social_icon">
        <ul>
          <li>
            <a href="#"> <FontAwesomeIcon icon ={faInstagram}/> </a>
          </li>
          <li>
          <a href="#"> <FontAwesomeIcon icon={faFacebookF} /> </a>
          </li>
          <li>
          <a href="#"> <FontAwesomeIcon icon ={faT}/> </a>
          </li>
          <li>
          <a href="#"> <FontAwesomeIcon icon ={faLinkedinIn}/> </a>
          </li>
        </ul>


      </div>
    </div>

  </div>
</footer>
  )
}

export default Footer