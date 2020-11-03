import React, { Component } from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Nutrition from './components/Nutrition'

import './App.css';

class App extends Component {

  render() {
    return (
        <div className="app">
            <Header />
            <Nutrition />
            <Footer/>
        </div>  
    );
  }
}

export default App;
