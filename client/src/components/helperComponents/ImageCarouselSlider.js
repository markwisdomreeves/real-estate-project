import React, { Component } from "react";
import Slider from "react-slick";


export default class ImageCarouselSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500
    };
    return (
      <div id="carousel-container">
        <Slider {...settings}>
          <div className="inner-carousel-box">
           <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160236/realEstateImages/inner-home-3_ije2oh.jpg" alt="featureImg5" />
          </div>
          <div className="inner-carousel-box">
           <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160237/realEstateImages/inner-home-4_rjvhmp.jpg" alt="featureImg5" />
          </div>
          <div className="inner-carousel-box">
           <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160236/realEstateImages/inner-home-1_ihavr7.jpg" alt="featureImg5" />
          </div>
          <div className="inner-carousel-box">
           <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160236/realEstateImages/inner-home-2_j4k7sg.jpg" alt="featureImg5" />
          </div>
          <div className="inner-carousel-box">
           <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160236/realEstateImages/home-4_tuutu0.jpg" alt="featureImg5" />
          </div>
        </Slider>
      </div>
    );
  }
}
