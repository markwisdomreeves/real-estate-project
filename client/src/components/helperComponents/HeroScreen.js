import React from 'react';
import { Link } from "react-router-dom";


function HeroScreen () {

  return (
    <div id="bg-image-container">
      <section className="hero-section-container">
        <div className="container hero-text-container text-white">
          <h1 className="hero-h1-text">Buy and Sell Real Estate Properties with us</h1>
          <p>
           We deal in Real Estate properties including buying & selling of Homes, Lands and Appartments.
          </p>
          <Link to="/products" className="read-more-btn">
            View Product Lists
          </Link>
        </div>
      </section>

    </div>

  )
}


export default HeroScreen;

