import React from 'react';


const FooterForm = () => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4 text-white">
      <div className="footer-form-container">
        <div className="form-group" id="inner-form-container">
          <h5 className="text-uppercase text-white mb-0 footer-h5">
            NewsLetter
          </h5>
          <p>
            Get in touch with Us
          </p>
          <form className="custom-form-style">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Email Address"
              required
              autoComplete="off"
            />
            <button>
              <i className="fa fa-send"></i>
              {/* Submit */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default FooterForm;
