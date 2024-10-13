import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import residentImgOne from "../../assets/Resident_img_1.jpg"
import residentImgTwo from "../../assets/Resident_img_2.jpg"

const Favorit = () => {
  return (
    <section id="konsumen">
    <div className="container">
      <div className="section_title">
        <div className="sub_title">
          <p>Pilihan konsumen</p>
        </div>
        <h2 className="title">Residen Favorit</h2>
      </div>
      <div className="favorit_warpper">
        <div className="favorit_img">
          <div className="img_one">
        <img src={residentImgOne} alt="favorit_img" />
          </div>
          <div className="img_two">
          <img src={residentImgTwo} alt="favorit_img" />
          </div>
        </div>
        <div className="favorit_info">
          <h2 className="title">
            Bangunan yang dirancang oleh Aristektur Handal
          </h2>
          <p className="pera">
            Tanpa diragukan, properti yang disediakan dalam webiste kami
            merupakan hasil kerjasama secara profesional dengan para
            Arsitektur ternama dan Developer yang terpercaya.
          </p>
          <div className="btn">
            <button type="button">
              <a href="#">
                <span> <FontAwesomeIcon icon={faPhone}/> </span>Hubungi Kami
              </a>
            </button>
            <button type="button">
              <a href="#"> Explore lebih banyak </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Favorit