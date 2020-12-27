import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import still1 from "./still1.jpeg";
import still2 from "./still2.jpeg";


import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class Still extends Component {
  render () {
    return (
      <div style={{width: "100%", display: "table"}}>
        <Helmet>
          <style>{'body { background-color: white;}'}</style>
        </Helmet>
        <div style={{display: "table-row"}}>
          <div style={{width: "200px", display: "table-cell", textAlign: "left"}}>
            <nav style={{ textAlign: 'left'}}>
              <Link to="/" style={{ textDecoration: 'none', display: 'block', paddingBottom: '30px' }}>PABLO</Link>{' '}
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
            <p>Landscapes (2019)</p>
            <img id="stillImage" src={still1} alt="Pablo's Portfolio Photo"></img>
            <br></br>
            <img id="stillImage" src={still2} alt="Pablo's Portfolio Photo"></img> 
            <br></br>
            <img id="stillImage" src={still1} alt="Pablo's Portfolio Photo"></img>
            <br></br>
            <img id="stillImage" src={still2} alt="Pablo's Portfolio Photo"></img> 
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default Still