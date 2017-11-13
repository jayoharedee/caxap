import React, { Component } from 'react';
import './CSS/Header.css';
import brand from './Images/logo.jpg';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="masthead clear">
            <div className="centered">
                <div className="site-branding responsive-img">
                  <img src={brand} alt="logo" />
                </div>
            </div>
        </header>

        <div className="centered">
            <section className="menu-section">
                <nav className="single-nav menu" role="navigation">
                    <ul classNameName="nav-parent">
                        <li>
                          <a href="#" classNameName="menu-header">Photo Editing</a>
                        </li>
                        <li>
                          <a href="#" classNameName="menu-header">Graphic Design</a>
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
