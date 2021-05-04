import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from "../../../GlobalState"
import Footer from '../../helperComponents/Footer';
import Sponsors from "../../helperComponents/Sponsors";
import Loading from '../utils/loading/Loading';
import ImageCarouselSlider from '../../helperComponents/ImageCarouselSlider';
import ProductVideoPlay from '../../helperComponents/ProductVideoPlay';
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification"
import { isEmpty, isEmail } from "../utils/validation/Validate"
import axios from "axios"


const initialState = {
  name: '',
  email: '',
  message: '',
  err: '',
  success: '',
}


const ProductDetailScreen = () => {
  const [contact, setContact] = useState(initialState)
  const {name, email, message, err, success} = contact

  const params = useParams()
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [isLogged] = state.userAPI.isLogged
  const addCart = state.userAPI.addCart
  const [productDetail, setProductDetail] = useState([])


  const contactHandleChangeInput = e => {
    const {name, value} = e.target;
    setContact({...contact, [name]:value, err: '', success: ''})
  }

  const submitContact = async e => {
    e.preventDefault()

    if(isEmpty(name) || isEmpty(message) || isEmpty(email))
      return setContact({...contact, err: "All field inputs are required", success: ''})

    if(!isEmail(email))
      return setContact({...contact, err: "Please enter a valid email", success: ''})

    try {
      const res = await axios.post('/api/contact', {name, email, message})
      setContact({...contact, err: '', success: res.data.msg})

      window.location.href = "/products"

    } catch (err) {
      err.response.data.msg &&
      setContact({...contact, err: err.response.data.msg, success: ''})
    }

  }

  useEffect(() => {
    if(params.id) {
      products.forEach(product => {
        if(product._id === params.id) setProductDetail(product)
      })
    }

  },[params.id, products])


  if (productDetail.length === 0) return <Loading /> || <p className="no-product-return">No product is returned. Please refresh your browser and try again!</p>;

  return (
    <>
      <div className="product-details-screen-container" id="product-details-screen">

        <div id="global-top-image-container">
          <section className="global-top-section-container">
            <div className="container global-top-text-container text-white">
              <h1 className="global-h1-text">Single Product Details</h1>
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
              <Link to="/products">
                <i className="fa fa-angle-right"></i>
                Products
              </Link>
              <span>
                <i className="fa fa-angle-right"></i>
                Product Details
              </span>
            </div>
          </div>


          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8
            first-items-side-container">

              <div className="first-image-item-box">
                <ImageCarouselSlider />
              </div>

              {/* <img src={productDetail.images.url} alt="" /> */}

              <div className="items-address-box">
                <h4>{productDetail.title}</h4>
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {productDetail.address}
                </span>
                {" "}
                <span>
                  <i className="fa fa-building" aria-hidden="true"></i>
                  ID#: {productDetail.product_id}
                </span>
                <span>
                  <i className="fa fa-balance-scale" aria-hidden="true"></i>
                   Sold: {productDetail.sold}
                </span>
                <span type="button" id="price-btn-box">
                  <i className="fa fa-money" aria-hidden="true"></i>
                    $ {productDetail.price}
                </span>
              </div>

              <div className="first-icons-box">
                <h4>Property Details</h4>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 first-icons-list-items">
                    <span>
                      <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                      600 Square foot
                    </span>
                    <span>
                      <i className="fa fa-car" aria-hidden="true"></i>
                        2 Garages
                    </span>
                    <span>
                      <i className="fa fa-bed" aria-hidden="true">
                      </i>
                      10 Bedrooms
                    </span>
                    <span>
                      <i className="fa fa-film" aria-hidden="true">
                      </i>
                      Family Villa
                    </span>
                    <span>
                      <i className="fa fa-trophy" aria-hidden="true">
                      </i>
                      5 years age
                    </span>
                    <span>
                      <i className="fa fa-user" aria-hidden="true">
                      </i>
                      Mark Reeves
                    </span>
                    <span>
                      <i className="fa fa-clock-o" aria-hidden="true">
                      </i>
                      3 day ago
                    </span>
                </div>
              </div>

              <div className="items-description">
                <h4>Description</h4>
                <p>
                 {productDetail.description}
                </p>
              </div>

            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4
            second-items-side-container">

              <div className="buy-btn-style">
                {
                  !isLogged ?
                    <>
                      <Link to="/login" className="btn btn-info" id="btn-1">
                       Buy Now
                      </Link>
                    </>
                    :
                    <>
                      <Link to="/cart"
                        className="btn btn-info" id="btn-1"
                        onClick={() => addCart(productDetail)}>
                        Buy Now
                      </Link>
                    </>
                }
              </div>

              <div className="side-form-image-box">
                <div className="image-avatar-box">
                  <img src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160233/realEstateImages/agent-4_d48d9g.jpg"
                  alt="avatarImg" />
                  <div className="real-estate-agent-box">
                    <h4>Grace Toe</h4>
                    <h6>Real Estate Agent</h6>
                  </div>
                </div>
                <div className="side-form-text-box">
                  <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  (+39) 351 080 2563
                  </span>
                  <br />
                  <span>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    reeves@gmail.com
                  </span>
                </div>
              </div>

              <div className="side-form-container">

              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}

                <div className="form-group inner-side-form-box">
                  <h3>Do you have any question?</h3>
                  <form onSubmit={submitContact}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="form-control form-input-field"
                        autoComplete="off"
                        value={name}
                        onChange={contactHandleChangeInput}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form-control form-input-field"
                        autoComplete="off"
                        value={email}
                        onChange={contactHandleChangeInput}
                      />
                    </div>

                    <textarea
                      type="text"
                      name="message"
                      id="textarea-input-field"
                      placeholder="What is on your mind?"
                      rows="6"
                      cols="43"
                      value={message}
                      onChange={contactHandleChangeInput}
                    ></textarea>

                    <div className="product-submit-btn">
                      <button type="submit">
                        Summit Now
                      </button>
                    </div>

                  </form>
                </div>
              </div>

              <div className="video-container">
                <ProductVideoPlay />
              </div>

            </div>

          </div>

        </div>

      </div>

      <Sponsors />

      <Footer />
    </>
  )
}


export default ProductDetailScreen;

