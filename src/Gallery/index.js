import React, { Component } from 'react';
import './CSS/Gallery.css';

import desktop from './Images/slide.jpg';
import mobile from './Images/slide-mobile.jpg';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className='gallery-section'>
          <picture className='gallery-photo responsive-img'>
            <source media='(max-width: 799px)' srcset={mobile} />
            {/* <source media='(min-width: 800px)' srcset={} /> */}
            <img src={desktop} alt='' />
          </picture>
        </div>
      </div>
    );
  }
}

export default Gallery;
