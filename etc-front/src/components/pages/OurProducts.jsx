import React from 'react';
import DayOldChick from '../../images/Chick_1.JPG';
import Feed from '../../images/Feed2.JPG';
import './OurProducts.css'; // Make sure to provide the correct path to the CSS file

function OurProducts() {
  return (
    <div className='main-product'>
      <h1 style={{textAlign:'center'}}>Our Products</h1>
      <div className='product-images'>
        <div className='img-container'>
          <img src={DayOldChick} alt='dayoldchick' className='dayoldchick' />
          <h1 style={{textAlign:'center'}}>Day Old Chicks</h1>
        </div>
        <div className='img-container'>
          <img src={Feed} alt='feed' className='feed' />
          <h1 style={{textAlign:'center'}}>Feed</h1>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;