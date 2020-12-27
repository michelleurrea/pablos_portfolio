import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import holladay1 from "./holladay1.jpg";
import holladay2 from "./holladay2.jpg";
import holladay3 from "./holladay3.jpg";
import Trevell1 from "./Trevell_Anderson1.JPG";
import Trevell2 from "./TrevellAnderson2.JPG";
import Trevell3 from "./TrevellAnderson3.JPG";
import Yesika1 from "./yesika1.jpg";
import Yesika2 from "./yesika2.jpg";


import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class Portrait extends Component {
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
            <p>Holladay</p>
            <img id="stillImage" src={holladay1} alt=""></img>
            <br></br>
            <img id="stillImage" src={holladay2} alt=""></img> 
            <br></br>
            <img id="stillImage" src={holladay3} alt=""></img>
            <br></br>
            <p>Tre'vell Anderson</p>
            <img id="stillImage" src={Trevell1} alt=""></img>
            <br></br>
            <img id="stillImage" src={Trevell2} alt=""></img> 
            <br></br>
            <img id="stillImage" src={Trevell3} alt=""></img>
            <br></br>
            <p>Yesika Salgado</p>
            <img id="stillImage" src={Yesika1} alt=""></img> 
            <br></br>
            <img id="stillImage" src={Yesika2} alt=""></img>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}

export default Portrait