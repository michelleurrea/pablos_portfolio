import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import projects1 from "./projects1.JPG";
import projects2 from "./projects2.jpg";
import projects3 from "./projects3.JPG";
import projects4 from "./projects4.JPG";
import projects5 from "./projects5.JPG";
import './App.css';

import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

class Project extends Component {
  render () {
    return (
      <div style={{width: "100%", display: "table"}}>
        <Helmet>
          <style>{'body { background-color: white;}'}</style>
        </Helmet>
        <div style={{display: "table-row"}}>
          <div style={{width: "200px", display: "table-cell", textAlign: "left"}}>
            <nav style={{ textAlign: 'left'}}>
              <Link to="/" style={{ textDecoration: 'none', display: 'block', paddingBottom: '30px' }}>PABLO</Link>
              <Link to="/portraits" style={{ textDecoration: 'none' }}>PORTRAITS</Link>{'   '}
              <br></br>
              <Link to="/stills" style={{ textDecoration: 'none' }}>STILLS</Link>{'   '}
              <br></br>
              <Link to="/projects" style={{ textDecoration: 'none' }}>SPECIAL PROJECTS</Link>{'   '}
              <br></br>
              <Link to="/contact" style={{ textDecoration: 'none' }}>CONTACT</Link>
            </nav>
          </div>
          <div style={{textAlign: "left", display: "table-cell"}}>
            <p>IMPETÚ - Los Angeles Contemporary Archives</p>
            <img id="portfolioImage" src={projects3} alt="Pablo's Portfolio Photo"></img>
            <br></br>
            <img id="portfolioImage" src={projects1} alt="Pablo's Portfolio Photo"></img> 
            <br></br>
            <img id="portfolioImage" src={projects2} alt="Pablo's Portfolio Photo"></img> 
            <br></br>
            <img id="portfolioImage" src={projects4} alt="Pablo's Portfolio Photo"></img>
            <br></br>
            <img id="portfolioImage" src={projects5} alt="Pablo's Portfolio Photo"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Project