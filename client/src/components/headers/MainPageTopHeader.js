import React, {useContext} from 'react';
import { GlobalState } from "../../GlobalState"
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./header.css"


function TopHeader () {
  const state = useContext(GlobalState)
  const [cart] = state.userAPI.cart
  const [isAdmin] = state.userAPI.isAdmin


  return (
      <div id="social-media-container">

        <div className="contact-details">

          <div className="top-info-one both-number-styles">
            <a href="tel:393773573878">
              <i className="fa fa-phone">
              (+39) 351 080 2563
              </i>
            </a>
          </div>

          <div className="top-info-one both-number-styles">
            <a href="mailto:wisdom3510802563@gmail.com">
              <i className="fa fa-envelope">
              wisdom3510802563@gmail.com
              </i>
            </a>
          </div>

          <div className="top-info-three">
            <a href="##" className="social-icons">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="##" className="social-icons">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="##" className="social-icons">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="##" className="social-icons">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="##" className="social-icons">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>

          {
            isAdmin ? ''
            :
            <div className="top-info-one">
              <Link to="/cart">
                <span>{cart.length}</span>
              </Link>
              <Link to="/cart">
                <FaCartArrowDown id="addToCart_start" />
              </Link>
            </div>
          }

        </div>
      </div>
  )
}


export default TopHeader;

