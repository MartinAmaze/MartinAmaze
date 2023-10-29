import React, { useState } from 'react';
import './App.css';
import tcalogo from "./assets/tcalogo.png";
import { FiMapPin } from 'react-icons/fi';
import MainComponent from './components/main';
import theword from  "./assets/theword.JPG";
import worship from  "./assets/worship.JPG";
import dancebg from  "./assets/dancebg.jpg";
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerMenuOpen(true);
  };

  const handleCloseHamburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  return (
    <section className='tca-app'>

      {/* Header Section */}
    <section className='header-section'>
     <div className="header">
       <div className="header-logo-name">
         <div className='header-home-navigation'>
           <img src={tcalogo} alt="Logo" style={{ width: "46px", height: "45px" }} />
           <p>THE COMFORTER'S <br/>ASSEMBLY</p>
         </div>
       </div>
       <div className='Location-time'>
         <div className='location-time-navigation'>
          <div className='location-icon'>
            <span><FiMapPin /></span>
          </div>
            <div className='location-text'>
              <p>Locations &amp; Times</p>
            </div>
         </div>
             <div className='hamburger-links'onClick={handleHamburgerClick}>
             <div className="hamburger-icon">
               <div className="hamburger-bar-1"></div>
               <div className="hamburger-bar-2"></div>
               <div className="hamburger-bar-3"></div>
               <div className="hamburger-bar-4"></div>
             </div>
             </div>
       </div>
     </div>
   </section>
    
    {/* Hero Section */}
   <section className='hero-section'>
     <div className='hero-billboard'>
       <MainComponent />
     </div>
   </section>

{/* three-sections-container-- [welcome-to-church] [Meet-the-pastor] [social-media]  */}
   <section className='three-section-container'>

    {/*welcome-to-church-section */}
    <div className='welcome-to-church-section'>
      <div className='welcome-to-church-content'>
        <div className='welcome-to-church-info'>
          <h1>Welcome to The<br/> Comforter's Assembly</h1>
           <p>A place where good things never cease to happen<br/>
              Come hear the undiluted Word of God in its simplicity<br/> 
              Stay blessed forevermore!
           </p>
          <div className='welcome-to-church-link'>
            <button>more about us</button>
            <span></span>
          </div>
        </div>
        <div className='welcome-to-church-info2'>
          <div className='welcome-to-church-info2-content'>
          <div className='welcome-to-church-info2-span'></div>
            <div className='image-card'>
              <img src={theword} alt="theword"/>
            </div>
           <div className='image-card'>
             <img src={worship} alt='worship'/>
           </div>
           <div className='image-card'>
             <img src={dancebg} alt='dancebg'/>
           </div>
         </div>
        </div>
      </div>
    </div>
  </section>

  {isHamburgerMenuOpen && (
        <HamburgerMenu handleClose={handleCloseHamburgerMenu} />
      )}
  </section>
  );
}

export default App;