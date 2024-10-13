import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Property = () => {
  return (
    //  property part start 

    <section id="property">
      <div className="container">
        <h2 className="title">Tahapan Pembelian Properti yang Mudah dan Cepat</h2>
        <div className="property_item">
          <div className="item">
            <div className="item_title">
              <h6>Pilih Properti</h6>
              <p>01</p>
            </div>
            <p className="pera">
              Cari properti yang diinginkan sesuai dengan kriteria anda dan
              keluarga. Cara memilih properti yang bijak dapat anda baca lebih
              lanjut di sini
            </p>
            <button type="button">
              <a href="#"
                >Baca lebih Lanjut <FontAwesomeIcon icon={faArrowRight} /></a>
            </button>
          </div>
          <div className="item">
            <div className="item_title">
              <h6>Proses Booking</h6>
              <p>02</p>
            </div>
            <p className="pera">
              Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan
              unit properti tertentu.
            </p>
            <button type="button">
              <a href="#"
                >Baca lebih Lanjut <FontAwesomeIcon icon = {faArrowRight}/> </a>
            </button>
          </div>
          <div className="item">
            <div className="item_title">
              <h6>KPR dan Sertifikasi</h6>
              <p>03</p>
            </div>
            <p className="pera">
              Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika
              diperlukan dan dilanjutkan proses sertifkasi HGB.
            </p>
            <button type="button">
              <a href="#"
                >Baca lebih Lanjut <FontAwesomeIcon icon={faArrowRight}/></a>
            </button>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Property
