import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, About, Signup, Login, CreateParty } from './containers';
import './styles/index.scss';
import Example from './components/Example';

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
        <Route path="/example-redux" render={ () => <Example />} />
      </BrowserRouter>
    )
  }
}

export default App;
