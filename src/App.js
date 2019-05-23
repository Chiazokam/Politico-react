import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { Home, About, Signup, Login, CreateParty, UserProfile, AdminProfile } from './containers';
import { Logout } from './components/global';
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
        <Route path="/logout" render={ () => <Logout />} />
        <Route path="/admin/create-party" render={ () => <CreateParty />} />
        <Route path="/admin/profile" render={ () => <AdminProfile />} />
        <ToastContainer />
      </BrowserRouter>
    )
  }
}

export default App;
