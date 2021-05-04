import React from 'react'


const RecentPropertiesCard = () => {
  return (
    <div className="container" id="main-property-container">

      <div className="text-container">
        <h1>Recent Properties</h1>
        <h6>Discover how much the latest properties have been sold for</h6>
      </div>

      <div className="row main-property-card-container" id="card-row-box">

        <div className="col-12 col-sm-12 col-md-6 image-cards-container-1 card-box">
          <div className="inner-image-card-box">

            <div className="sale-label">
              <span className="badge bg-danger text-white">FOR SALE</span>
            </div>

            <div className="property-address">
              <h2>176 Kingsberry, Dr Anderson</h2>
              <i className="fa fa-map-marker" aria-hidden="true">Bovio Teramo, Italia</i>
            </div>

            <div className="sale-price">
              <span className="badge bg-secondary text-white">$11,222,000</span>
            </div>

          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 image-cards-container-2 card-box">
          <div className="inner-image-card-box">

            <div className="sale-label">
              <span className="badge bg-success text-white">FOR RENT</span>
            </div>

            <div className="property-address">
              <h2>Los Angeles, Mr. Johnson</h2>
              <i className="fa fa-map-marker" aria-hidden="true">Los Angeles, CA 90058, USA</i>
            </div>

            <div className="sale-price">
              <span className="badge bg-secondary text-white">$21,695,000</span>
            </div>

          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 image-cards-container-3 card-box">
          <div className="inner-image-card-box">

            <div className="sale-label">
              <span className="badge bg-warning text-white">FOR LEASE</span>
            </div>
            <div className="property-address">
              <h2>90059 California, Mrs. Grace Reeves</h2>
              <i className="fa fa-map-marker" aria-hidden="true">Los Angeles, USA</i>
            </div>

            <div className="sale-price">
              <span className="badge bg-secondary text-white">$10,000,000</span>
            </div>

          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 image-cards-container-4 card-box">
          <div className="inner-image-card-box">

            <div className="sale-label">
              <span className="badge bg-info text-white">FOR LOAN</span>
            </div>

            <div className="property-address">
              <h2>226, New kings estate, Dr Williams</h2>
              <i className="fa fa-map-marker" aria-hidden="true">Newcastle, English</i>
            </div>

            <div className="sale-price">
              <span className="badge bg-secondary text-white">$13,795,000</span>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}


export default RecentPropertiesCard;

