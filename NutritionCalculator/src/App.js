import React, { Component } from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Nutrition from './components/Nutrition'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
            <Header />
            <Route exact path="/" component={Nutrition}></Route>
            <Footer/>
        </div>  
      </Router>
    );
  }
}

export default App;
