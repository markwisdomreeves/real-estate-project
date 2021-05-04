
import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import FeatureVideo from "../../assets/video.mp4";
import FeatureVideoBg from "../../assets/video-bg.jpg";


const ProductVideoPlay = (props) => {
  return (
    <Player
      playsInline
      poster={FeatureVideoBg}
      src={FeatureVideo}
    />
  );
};


export default ProductVideoPlay;
