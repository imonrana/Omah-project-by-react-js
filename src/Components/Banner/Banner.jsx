import React from 'react'
// import fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

// import img
import bannerImg from "../../assets/banner_img.png"
const Banner = () => {
  return (
    // banner part start
    <section id="banner">
      <div className="container">
        <div className="banner_warpper">
          <div className="banner_info">
            <h1 className="title">Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
            <p className="pera">
              Menyediakan hunian bagi keluarga anda dengan varian pilihan dan
              lokasi yang strategis di kota anda dengan cara yang lebih mudah.
            </p>
            <div className="search_box">
              <input
                type="search"
                placeholder="Search location, properties, residental group"
              />
              <button type="button"><a href="#">Search</a></button>
              <FontAwesomeIcon icon={faLocationDot} className='search_icon' />
            </div>
          </div>
          <div className="banner_img">
            <img src={bannerImg} alt="banner_img" />
          </div>
        </div>
      </div>
    </section>

    // banner part end
  )
}

export default Banner