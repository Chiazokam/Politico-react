import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About, Signup } from './containers';
import './styles/index.scss';

class App extends Component {
  render()  {
    return (
      <BrowserRouter>
        <Route exact path="/home" render={ () => <Home />} />
        <Route path="/about" render={ () => <About />} />
        <Route path="/signup" render={ () => <Signup />} />
      </BrowserRouter>
    )
  }
}

export default App;