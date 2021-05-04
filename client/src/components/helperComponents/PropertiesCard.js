import React from 'react';


const PropertiesCard = () => {
  return (
    <div className="container-fluid properties-card-container">

      <div className="properties-text">
        <h2>CLIENTS PROPERTY</h2>
        <p>What kind of property are you looking for? We will help you</p>
      </div>

      <div className="row image-container">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 image-box">
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160234/realEstateImages/card-7_fkqpx5.jpg" alt="property-1" />
          <h3>Appartment for sale</h3>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 image-box">
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160235/realEstateImages/card-8_b2trd8.jpg" alt="property-2" />
          <h3>Office Building</h3>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 image-box">
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160234/realEstateImages/card-3_hxrsra.jpg" alt="property-3" />
          <h3>Resort Villas</h3>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 image-box">
          <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160235/realEstateImages/card-10_hp6eqr.jpg" alt="property-4" />
          <h3>Family Home</h3>
        </div>
      </div>

    </div>
  )
}


export default PropertiesCard;



