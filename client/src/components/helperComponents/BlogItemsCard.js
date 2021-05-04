import React from 'react';


const BlogItemsCard = () => {
  return (
    <div className="container" id="blog-container">
      <div className="blog-header">
        <h2>BLOG POSTS</h2>
        <p>Our Latest blog posts</p>
      </div>

      <div className="row" id="main-blog-container">

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 single-blog">
          <div className="image-container">
            <img className="img-fluid"
             width="600" height="300"
             src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160234/realEstateImages/card-1_ibv9rc.jpg"
             alt="BlogImg1" />
          </div>
          <h6>Will the Housing Market Bloom This Spring and next Spring?</h6>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
            Mark Reeves
          </span>
          <span>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            14 April 2021
          </span>
          <div className="blog-body-text">
            <p>Lorem Ipsum is filler text nonsense words and sentences.</p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 single-blog">
          <div className="image-container">
            <img className="img-fluid"
             width="600" height="300"
             src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160234/realEstateImages/card-2_hq6cly.jpg"
             alt="BlogImg2" />
          </div>
          <h6>How Upset Should You Be about 3% Mortgage Rates?</h6>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
            Mark Reeves
          </span>
          <span>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            14 April 2021
          </span>
          <div className="blog-body-text">
            <p>Lorem Ipsum is filler text nonsense words and sentences.</p>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 single-blog">
          <div className="image-container">
            <img className="img-fluid"
             width="600" height="300"
             src="https://res.cloudinary.com/dpnevg5nt/image/upload/v1618160234/realEstateImages/card-3_hxrsra.jpg"
             alt="BlogImg3" />
          </div>
          <h6>What Is the #1 Financial Benefit of Homeownership?</h6>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
            Mark Reeves
          </span>
          <span>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            14 April 2021
          </span>
          <div className="blog-body-text">
            <p>Lorem Ipsum is filler text nonsense words and sentences.</p>
          </div>
        </div>

      </div>


    </div>
  )
}


export default BlogItemsCard;

