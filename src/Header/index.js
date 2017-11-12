import React, { Component } from 'react';
import './CSS/Header.css';
import brand from './Images/caxap.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <header class="masthead clear">
            <div class="centered">
                <div class="site-branding">
                  <img src={brand} alt="logo" />
                </div>
            </div>
        </header>

        <div class="centered">
            <section class="menu-section">
                <nav id="single-nav" class="single-nav menu" role="navigation">
                    <ul className="nav-parent">
                        <li>
                          <a href="#" className="menu-header">Photo Editing</a>
                        </li>
                        <li>
                          <a href="#" className="menu-header">Graphic Design</a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
      </div>
    );
  }
}

export default Header;
