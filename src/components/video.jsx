import React from 'react';
import VideoBg  from '../assets/VideoBg.mp4';


const VideoComponent = () => {
  return (
    <div className='header-section'>
      <video autoPlay loop muted className='hero-video'>
        <source src={VideoBg} type="video/mp4" />
        <source src={VideoBg} type="video/webm" />
        <source src={VideoBg} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      </div>

  );
};

export default VideoComponent;