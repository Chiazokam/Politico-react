import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { Home, About, Signup, Login, CreateParty, UserProfile, AdminProfile, GetParties, CreateOffice } from './containers';
import { Logout, Back } from './components/global';
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
        <Route path="/user/profile" render={ () => <UserProfile />} />
        <Route path="/admin/profile" render={ () => <AdminProfile />} />
        <Route path="/logout" render={ () => <Logout />} />
        <Route path="/parties/new" render={ () => <CreateParty />} />
        <Route path="/offices/new" render={ () => <CreateOffice />} />
        <Route path="/parties" render={ () => <GetParties />} />
        <Route path="/back" render={ () => <Back />} />
      </BrowserRouter>
    )
  }
}

export default App;
