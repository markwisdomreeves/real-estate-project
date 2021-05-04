import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import { Link } from 'react-router-dom';
import BlogsItem from '../../mainpages/blogsItem/BlogItem';
import Footer from '../../helperComponents/Footer';
import Sponsors from "../../helperComponents/Sponsors";


const BlogScreen = () => {
  const state = useContext(GlobalState)
  const [blogs] = state.blogsAPI.blogs


  return (
    <>
      <div className="blog-screen-container" id="blog-screen">

        <div id="global-top-image-container">
          <section className="global-top-section-container">
            <div className="container global-top-text-container text-white">
              <h1 className="global-h1-text">Blogs</h1>
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
                Blogs
              </span>
            </div>
          </div>

          <div className="row">
            {
              blogs.map(blog => {
                return (
                  <div key={blog._id} className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 blog-item-style-box">
                    <BlogsItem key={blog._id} blog={blog} />
                  </div>
                )
              })
            }
          </div>


          <Sponsors />

        </div>

      </div>

      <Footer />
    </>
  )
}


export default BlogScreen;

