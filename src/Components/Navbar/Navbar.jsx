import React from 'react'
import logo from "../../assets/brand_logo.png"

const Navbar = () => {
  return (
// navbar start
    <section id="navbar">
      <div className="container">
        <nav>
          <div className="brand_logo">
            <a href="#"><img src={logo} alt="brand_logo" /></a>
          </div>
          <div className="nav_items">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Properties</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

  )
  // navbar end
}
export default Navbar