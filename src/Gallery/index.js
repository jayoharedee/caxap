import React, { Component } from 'react';
import './CSS/Gallery.css';

import cat from './Images/cat-800-480.jpg';

class Gallery extends Component {
  render() {
    return (
      <div>
        <div className='galley-section'>
          <picture className='gallery-photo'>
            <source media='(max-width: 799px)' srcset={cat} />
            <source media='(min-width: 800px)' srcset={cat} />
            <img src={cat} alt='Chris standing up holding his daughter Elva' />
          </picture>
        </div>
      </div>
    );
  }
}

export default Gallery;
