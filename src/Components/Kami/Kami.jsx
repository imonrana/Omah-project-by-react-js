import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import kamiImg from "../../assets/kami_img.png"
const Kami = () => {
  return (
    <section id="kami">
    <div className="container">
      <div className="main">
        <div className="footer_left">
          <h3 className="title">
            Hubungi Kami
          </h3>
          <div className="card_item">
          <div className="contact_card">
            <div className="card_info">
              <div className="icon">
                <FontAwesomeIcon icon = {faPhone}/>
              </div>
              <div>
                <p>Call</p>
                <p>+6281232936733</p>
              </div>
            </div>
            <div className="btn">
              <button type="button"><a href="#">Call Now</a></button>
            </div>
          </div>
          <div className="contact_card">
            <div className="card_info">
              <div className="icon">
              <FontAwesomeIcon icon = {faPhone}/>
              </div>
              <div>
                <p>Call</p>
                <p>+6281232936733</p>
              </div>
            </div>
            <div className="btn">
              <button type="button"><a href="#">Call Now</a></button>
            </div>
          </div>
        </div>
        </div>
        <div className="footer_right">
          <h3 className="title">Penghargaan</h3>
          <img src={kamiImg} alt="kami_img"/>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Kami