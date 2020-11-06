import React, { Component } from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Nutrition from './components/Nutrition'
import VideoHandler from './components/VideoHandler'

import './App.css';

class App extends Component {

  render() {
    return (
        <div className="app">
            <Header />
            <VideoHandler />
            <Nutrition />
            <Footer/>
        </div>  
    );
  }
}

export default App;
