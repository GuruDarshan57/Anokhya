import React from 'react';
import './Sponsors.css';
import img1 from './images/cocoa.jpg';
import img2 from './images/Canam.png';
import bimg from '../../Assets/bottom.png'

const Sponsors = () => {
  return (
    <div className='spons'>
      <div className="sponsors_head">
        <h2>Sponsors</h2>
        <p>Click to Discover Sponsor Offerings!</p>
      </div>
      <div className='sponsMain'>
        <a href={"/sponsor/CocoaCounty"}> <div className='card'>
          <img className='card-image' src={img1} alt="Cocoa Sponsor" />

        </div></a>

        <a href='https://www.canamgroup.com'><div className='card'>
          <img className='card-image' src={img2} alt="Canam Sponsor" />
        </div></a>
      </div>


    </div>
  );
}

export default Sponsors;
