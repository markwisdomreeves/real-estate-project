import React from 'react';


const PopularPlaces = () => {
  return (
    <div className="container" id="popular-places">

      <div className="popular-places-text">
        <h3>POPULAR PLACES</h3>
        <p>We understand the value and importance of place</p>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex-image-box" id="places-bg-img-1">
          <div className="img-text-center">
            <h4>Rome</h4>
            <p>205 Properties</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 flex-image-box" id="places-bg-img-2">
          <div className="img-text-center">
            <h4>Spain</h4>
            <p>90 Properties</p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 small-flex-image-box" id="places-bg-img-3">
          <div className="img-text-center">
            <h4>France</h4>
            <p>56 Properties</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 small-flex-image-box" id="places-bg-img-4">
          <div className="img-text-center">
            <h4>New York</h4>
            <p>107 Properties</p>
          </div>
        </div>

      </div>



    </div>
  )
}


export default PopularPlaces;

