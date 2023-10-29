import React from 'react';
import VideoBg  from '../assets/VideoBg.mp4';


const MainComponent = () => {
  return (
    <div className='hero-maincomponent'>
      <video autoPlay loop muted className='hero-video'>
        <source src={VideoBg} type="video/mp4" />
        <source src={VideoBg} type="video/webm" />
        <source src={VideoBg} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className='video-contents'>
        <h1>we are more than a church..<br/> we are family</h1>
        <div className='video-content-links'>
          <div className='event-link'>
            <span className='event-span'></span>
            <button>events</button>
          </div>
          <div className="visit-link">
            <span className='visit-span'></span>
            <button>plan a visit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;