import React from 'react'
import berbagaiImgOne from '../../assets/berbagai_img1.jpg'
import berbagaiImgTwo from '../../assets/berbagai_img2.png'
import berbagaiImgThree from '../../assets/berbagai_img3.jpg'

const Berbagai = () => {
  return (
    // berbagai kota part start
    <section id="berbagai">
      <div className="container">
        <div className="section_title">
          <div className="sub_title">
            <p>Pilihan Auditor</p>
          </div>
          <h2 className="title">Residen Berbagai Kota</h2>
        </div>
        <div className="berbagai_card">
          <div className="item">
            <img src={berbagaiImgOne} alt="berbagai_img1" />
            <div className="card_info">
              <p className="info_title">Magnolia Surabaya</p>
              <p className="pera">
                Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec.
                Jatiuwung, Kota Tangerang, Banten 15136
              </p>
            </div>
          </div>
          <div className="item">
            <img src={berbagaiImgTwo} alt="berbagai_img2" />
            <div className="card_info">
              <p className="info_title">Pinang Residences</p>
              <p className="pera">
                Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta
                Selatan 12330
              </p>
            </div>
          </div>
          <div className="item">
            <img src={berbagaiImgThree} alt="berbagai_img3" />
            <div className="card_info">
              <p className="info_title">South Grove</p>
              <p className="pera">
                1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta
                Selatan, Daerah Khusus Ibukota Jakarta 12440
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // berbagai kota part end
  )
}

export default Berbagai