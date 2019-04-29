import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About, Signup, Login, CreateParty } from './containers';
import './styles/index.scss';

class App extends Component {
  render()  {
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Home />} />
        <Route exact path="/home" render={ () => <Home />} />
        <Route path="/about" render={ () => <About />} />
        <Route path="/signup" render={ () => <Signup />} />
        <Route path="/login" render={ () => <Login/>} />
        <Route path="/admin/create-party" render={ () => <CreateParty />} />
      </BrowserRouter>
    )
  }
}

export default App;
