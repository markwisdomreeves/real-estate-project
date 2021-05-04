import React from 'react';


const Services = () => {
  return (
    <div id="main-services-container">
      <div className="container-fluid" id="background-image">

        <div className="row" id="services-row-container">

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <div className="inner-image-container">
                <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160237/realEstateImages/services-img_jumey4.jpg" alt="servicesImg" id="services-img" />
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6" id="inner-services-container">

            <div className="services-text-box">
              <h2>OUR SERVICES</h2>
              <p>We provide the perfect service.</p>
            </div>

            <div className="services-box">
              <div className="inner-icons-box">
                <i className="fa fa-home" aria-hidden="true"></i>
              </div>
              <div className="inner-text-box">
                <h3>Sale Homes</h3>
                <p>In Aenean purus, pretium sito amet sapien denim consectet sed urna placerat sodales magna leo.</p>
              </div>
            </div>

            <div className="services-box">
              <div className="inner-icons-box">
                <i className="fa fa-briefcase" aria-hidden="true"></i>
              </div>
              <div className="inner-text-box">
                <h3>Sale Lands</h3>
                <p>In Aenean purus, pretium sito amet sapien denim consectet sed urna placerat sodales magna leo.</p>
              </div>
            </div>

            <div className="services-box">
              <div className="inner-icons-box">
                <i className="fa fa-comments-o" aria-hidden="true"></i>
              </div>
              <div className="inner-text-box">
                <h3>Negotiate for Homes</h3>
                <p>In Aenean purus, pretium sito amet sapien denim consectet sed urna placerat sodales magna leo.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}


export default Services;

