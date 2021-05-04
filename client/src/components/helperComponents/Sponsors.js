import React, { Component } from "react";
import Slider from "react-slick";


export default class Sponsors extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div id="sponsor-container">
          <h4>Meet our trusted Sponsors</h4>
        <Slider {...settings}>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160237/realEstateImages/sponsor-1_helor3.png" alt="sponsor1" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160237/realEstateImages/sponsor-2_tfg10k.png" alt="sponsor2" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160238/realEstateImages/sponsor-3_kff6af.png" alt="sponsor3" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160232/realEstateImages/sponsor-4_xl9jnn.png" alt="sponsor4" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160232/realEstateImages/sponsor-5_lqqagy.png" alt="sponsor5" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160232/realEstateImages/sponsor-6_uz6auy.png" alt="sponsor6" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160232/realEstateImages/sponsor-7_aajrkk.png" alt="sponsor7" />
            </div>
            <div className="sponsor-item">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160233/realEstateImages/sponsor-8_ues0mt.png" alt="sponsor8" />
            </div>
        </Slider>

      </div>
    );
  }
}

