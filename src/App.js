import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import Feature from './Feature';
import Portrait from './Portrait';
import Still from './Still';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/features" component={Feature} />
          <Route exact path="/portraits" component={Portrait} />
          <Route exact path="/stills" component={Still} />
        </div>
      </Router>
    )
  }
}

export default App
