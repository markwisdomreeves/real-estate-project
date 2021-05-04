import React from 'react';
import OurAgentsCard from '../helperComponents/OurAgentsCard';
import Sponsors from '../helperComponents/Sponsors';
import { Link } from "react-router-dom";
import Footer from "../helperComponents/Footer";


const AboutUsScreen = () => {
  return (
    <>
      <div id="global-top-image-container">
        <section className="global-top-section-container">
          <div className="container global-top-text-container text-white">
            <h1 className="global-h1-text">About Us</h1>
          </div>
        </section>
      </div>

      <div className="container">

          <div className="site-breadcrumb">
            <div className="inner-breadcrumb-box">
              <Link to="/">
                <i className="fa fa-home"></i>
                Home
              </Link>

              <span>
                <i className="fa fa-angle-right"></i>
                About Us
              </span>
            </div>
          </div>


          <div className="row about-us-main-container">

            <div id="image-box">
              <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160233/realEstateImages/about-us-img_djg8xv.jpg"
              alt="aboutUsImg" />
            </div>

            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-start" id="about-text-box">
              <h2 className="text-left">ABOUT US</h2>
              <p className="text-left">
              Lorem ipsum dolor sitdoni amet, consectetur donald adipis elite for. Vivamus interdum ultrices augue. Aenean dos cursus lania. Duis et fringilla leonardo. Mauris mattis sem, debut curus risus viverra sed. Vestibul vitae velit felis. Nulla placerat orci ante casat. Pellentesque ac placerat . Cras urna duis, ornare cursus purus.
              </p>
              <p className="text-left">
              Lorem ipsum dolor sitdoni amet, consectetur donald adipis elite for. Vivamus interdum ultrices augue. Aenean dos cursus lania. Duis et fringilla leonardo. Mauris mattis sem, debut curus risus viverra sed. Vestibul vitae velit felis. Nulla placerat orci ante casat. Pellentesque ac placerat . Cras urna duis, ornare cursus purus.
              </p>
            </div>

            <div className="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" id="about-text-box">
              <h2 className="text-left">OUR QUALITY</h2>

              <p className="text-left">
              Donec enim ipsum porta justo integer at velna vitae auctor integer congue magna at risus auctor purus unt pretium ligula rutrum integer sapien ultrice ligula luctus undo magna risus
              </p>

              <div id="font-icon-box">
                <p className="text-left">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                  Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite.
                </p>
                <p className="text-left">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                  Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite.
                </p>
                <p className="text-left">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                  Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite.
                </p>
                <p className="text-left">
                  <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                  Lorem ipsum dolor sitdoni amet, consectetur dont adipis elite.
                </p>
              </div>
            </div>

          </div>

        <OurAgentsCard />
        <Sponsors />

      </div>

      <Footer />
    </>

  )
}


export default AboutUsScreen;

