import React from 'react';
import { Link } from 'react-router-dom';


const BlogItem = ({blog}) => {

  function truncate(str) {
    return str.length > 100 ? str.substring(0, 80) + "..." : str;
  }

  return (
    <div className="container blog-item-container" id="blog-container">
      <div className="row main-blog-container">
        <div className="inner-blog-container single-blog">
          <div className="image-container">
            <img className="img-fluid"
            id="blog-images"
            width="600" height="300"
            src={blog.image} alt="BlogImg1" />
          </div>
          <Link to={`blogs/${blog._id}`} className="blog-item-links">
            <h6>{blog.title}</h6>
          </Link>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
            {blog.person}
          </span>
          <span>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <Link to={`blogs/${blog._id}`} className="blog-item-links">
            <div className="blog-body-text">
              <p style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{truncate(blog.description)}</p>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}


export default BlogItem;

