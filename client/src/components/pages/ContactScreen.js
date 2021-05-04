import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sponsors from '../helperComponents/Sponsors';
import Footer from '../helperComponents/Footer';
import { showErrMsg, showSuccessMsg } from "../mainpages/utils/Notification/Notification"
import { isEmpty, isEmail } from "../mainpages/utils/validation/Validate"
import axios from "axios"


const initialState = {
  name: '',
  email: '',
  message: '',
  err: '',
  success: '',
}

function ContactScreen() {
  const [contact, setContact] = useState(initialState)
  const {name, email, message, err, success} = contact

  const handleContactInput = e => {
    const {name, value} = e.target;
    setContact({...contact, [name]:value, err: '', success: ''})
  }

  const contactSubmit = async e => {
    e.preventDefault()

    if(isEmpty(name) || isEmpty(email) || isEmpty(message))
      return setContact({...contact, err: "All field inputs are required", success: ''})

    if(!isEmail(email))
      return setContact({...contact, err: "Please enter a valid email", success: ''})

    try {
      const res = await axios.post('/api/contact', {name, email, message})
      setContact({...contact, err: '', success: res.data.msg})

      window.location.href = "/contact"

    } catch (err) {
      err.response.data.msg &&
      setContact({...contact, err: err.response.data.msg, success: ''})
    }

  }


  return (
      <>
        <div id="main-contact-container">

            <div id="global-top-image-container">
              <section className="global-top-section-container">
                <div className="container global-top-text-container text-white">
                  <h1 className="global-h1-text">Contact Us</h1>
                </div>
              </section>
            </div>

            <div className="container site-breadcrumb">

              <div className="inner-breadcrumb-box">
                  <Link to="/">
                    <i className="fa fa-home"></i>
                    Home
                  </Link>
                <span>
                  <i className="fa fa-angle-right"></i>
                  Contact
                </span>
              </div>


            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" id="contact-container">

                <div className="contact-bg-img">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160235/realEstateImages/contact-us-bg_yeimjp.jpg"
                  alt="contact-us-bg" />
                </div>

                <div className="contact-image-text-box">
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    64100 Viale Bovio Teramo, Italia
                  </span>
                  <span>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    (+39) 351 080 2563
                  </span>
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    reeves@gmail.com
                  </span>
                </div>

              </div>


              <div className="row" id="contact-us-section">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6
                form-img-box">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160235/realEstateImages/contact-form_wycbo1.jpg"
                  alt="contactImg" />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6
                form-input-box">

                {/* error message below */}
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                  <h3>GET IN TOUCH</h3>
                  <p>We sale and rent Homes</p>
                  <form onSubmit={contactSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={handleContactInput}
                          autoComplete="off"
                          placeholder="Name"
                          className="form-control form-input-field"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={handleContactInput}
                          autoComplete="off"
                          placeholder="Email"
                          className="form-control form-input-field"
                        />
                      </div>

                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        rows="6"
                        cols="43"
                        value={message}
                        onChange={handleContactInput}
                        className="textarea-input-field"
                        placeholder="What is on your mind?"
                      ></textarea>

                      <div className="submit-btn">
                        <button type="submit">
                          Summit Now
                        </button>
                      </div>

                  </form>
                </div>
              </div>

              <Sponsors />

            </div>

        </div>

        <Footer />
        </>
      )
}


export default ContactScreen;

