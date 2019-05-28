import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Home,
  About,
  Signup,
  Login,
  CreateParty,
  UserProfile,
  AdminProfile,
  GetParties,
  CreateOffice,
  AuthorizationHOC,
  GetOffices,
  BecomeCandidate
} from './containers';
import { Logout } from './components/global';
import './styles/index.scss';

class App extends Component {

  render()  {
    return (
      <BrowserRouter>
        <Route exact path="/"component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <AuthorizationHOC path="/user/profile" component={UserProfile} />
        <AuthorizationHOC path="/admin/profile" component={AdminProfile} />
        <AuthorizationHOC path="/parties/new" component={CreateParty} />
        <AuthorizationHOC path="/offices/new" component={CreateOffice} />
        <AuthorizationHOC path="/parties" component={GetParties} />
        <AuthorizationHOC path="/offices" component={GetOffices} />
        <AuthorizationHOC path="/run for an office" component={BecomeCandidate} />
      </BrowserRouter>
    )
  }
}

export default App;
