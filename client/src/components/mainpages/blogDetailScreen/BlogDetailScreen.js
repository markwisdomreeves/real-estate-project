import React, {useState, useContext, useEffect} from 'react'
import {GlobalState} from "../../../GlobalState"
import { Link, useParams } from 'react-router-dom';
import Footer from '../../helperComponents/Footer';
import Loading from '../utils/loading/Loading';


const BlogDetailScreen = () => {
  const params = useParams()
  const state = useContext(GlobalState)
  const [blogs] = state.blogsAPI.blogs
  const [blogDetail, setBlogDetail] = useState([])


  useEffect(() => {
    if(params.id) {
      blogs.forEach(blog => {
        if(blog._id === params.id) setBlogDetail(blog)
      })
    }
  }, [params.id, blogs])


  // if(blogDetail.length === 0) return null

  if (blogDetail.length === 0) return <Loading /> || <p className="no-product-return">No product is returned. Please refresh your browser and try again!</p>;

  return (
    <>
      <div className="blog-details-screen-container" id="blog-details-screen">

        <div id="global-top-image-container">
          <section className="global-top-section-container">
            <div className="container global-top-text-container global-top-blog-title-container text-white">
              <h4 className="global-h1-text global-blog-title" id="text-size">{blogDetail.title}</h4>
            </div>

            <div className="blog-details-header-image-box">
              <span>
                <i className="fa fa-user" aria-hidden="true"></i>
                {blogDetail.person}
              </span>
              <span>
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                {new Date(blogDetail.createdAt).toLocaleDateString()}
              </span>
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
              <Link to="/blogs">
                <i className="fa fa-angle-right"></i>
                Blogs
              </Link>
              <span>
                <i className="fa fa-angle-right"></i>
                Blog Details
              </span>
            </div>
          </div>


          <div className="row">
            {/* <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 col-xxl-1
            social-media-icons-box"> */}
            <div className="social-media-icons-box col-md-1">
              <h5>share</h5>
              <div className="social-shared-links" id="custom-social-icon-box">
                <a href="####" id="facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="####" id="google">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </a>
                <a href="####" id="twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="####" id="instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="####" id="pinter">
                  <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xxl-10
            social-media-img-and-text-box"> */}

           <div className="social-media-img-and-text-box col-xs-12 col-sm-12 col-md-10">
              <img src={blogDetail.image} className="img-fluid" alt="blogImg1" />
              <div className="blog-details-text-box">
                <p>
                  {blogDetail.description}
                </p>
                <p className="unique-text">
                “Any programmers can write code that a computer can understand. But good programmers write code that humans can understand.”
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}


export default BlogDetailScreen;

