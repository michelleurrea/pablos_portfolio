import React, {Component} from 'react';
import profilePhoto from './portfolioFoto.jpg';
import './App.css';

import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class Home extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>PABLO</h1>
          <img id="homeImage" src={profilePhoto} alt="Pablo's Portfolio Photo"></img>
        </div>
        <nav>
            <Link to="/projects" style={{ textDecoration: 'none', padding: '10px'}}>PROJECTS</Link>
            <Link to="/features" style={{ textDecoration: 'none', padding: '10px'}}>FEATURES</Link>
            <Link to="/contact" style={{ textDecoration: 'none' , padding: '10px'}}>CONTACT</Link>
        </nav>
      </div>
    )
  }
}

export default Home