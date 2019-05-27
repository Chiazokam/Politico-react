import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

  logout = () => {
    localStorage.removeItem('isCandidate');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    window.location.href = '/login'
  }

  render() {
  return (
    <div>
      {this.logout()}
    </div>
    )
  }
}

export default Logout;
