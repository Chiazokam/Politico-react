import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About } from './containers';
import './styles/index.scss';

class App extends Component {
  render()  {
    return (
      <BrowserRouter>
        <Route exact path="/home" render={ () => <Home />} />
        <Route path="/about" render={ () => <About />} />
      </BrowserRouter>
    )
  }
}

export default App;