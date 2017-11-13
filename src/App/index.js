import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';

import Header from '../Header';
import Gallery from '../Gallery';

class App extends Component {
  render() {
    return (
      <main className="main-area">
        <div className="centered">
          <Header />
          <Gallery />
        </div>
      </main>
    );
  }
}

export default App;
