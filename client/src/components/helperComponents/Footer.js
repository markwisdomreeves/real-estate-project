import React from 'react';
import { Link } from "react-router-dom";
import FooterForm from './FooterForm';
import ScrollTopButton from './ScrollTopButton';


const Footer = () => {
  return (
    <>
    <ScrollTopButton />

    <footer className="text-center text-lg-start" id="footer-container">

      <div className="container sub-footer-container p-4">

        <div className="row">

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4 text-white">
            <h5 className="text-uppercase text-white mb-0 footer-h5 text-left">Home Cares</h5>
            <p className="text-left custom-text-style">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="footer-social-icon">
              <a href="##!!" className="footer-icons">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="##!!" className="footer-icons">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="##!!" className="footer-icons">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="##!!" className="footer-icons">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="##!!" className="footer-icons">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4 footer-items-links-container">
            <h5 className="text-uppercase text-white mb-0 footer-h5 text-left">Contacts</h5>
            <ul className="list-unstyled mb-0 footer-items-links-box text-left">
              <li className="custom-text-style">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                Viale Bovio Teramo, Italia
              </li>
              <li className="custom-text-style">
                <i className="fa fa-phone" aria-hidden="true"></i>
                (+39) 351 080 2563
              </li>
              <li className="custom-text-style">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                reeves@gmail.com
              </li>
              <li className="custom-text-style">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                Mon-Sat, 08AM-06PM
              </li>
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4 footer-items-links-container">
            <h5 className="text-uppercase text-white mb-0 footer-h5 text-left">Popular Places</h5>
            <ul className="list-unstyled mb-0 footer-items-links-box text-left">
              <li className="custom-text-style">
                <a href="#!" className="text-white">Italy</a>
              </li>
              <li className="custom-text-style">
                <a href="#!" className="text-white">New York</a>
              </li>
              <li className="custom-text-style">
                <a href="#!" className="text-white">Spain</a>
              </li>
              <li className="custom-text-style">
                <a href="#!" className="text-white">France</a>
              </li>
            </ul>
          </div>

          <FooterForm />
        </div>

        <div className="d-flex justify-content-center text-white" id="footer-bottom-links">
          <Link to="/" className="botton-footer-links">
            Home
          </Link>
          <Link to="/products" className="botton-footer-links">
            Products
          </Link>
          <Link to="/blogs" className="botton-footer-links">
            Blogs
          </Link>
          <Link to="/about-us" className="botton-footer-links">
            About
          </Link>
          <Link to="/contact" className="botton-footer-links">
            Contact
          </Link>
        </div>

        <div className="text-center text-white pt-4 custom-text-style">
          <p>&copy; 2021 | Real Estate Homes | All right reserved.</p>
        </div>

      </div>


    </footer>

    </>

  )
}

export default Footer;



