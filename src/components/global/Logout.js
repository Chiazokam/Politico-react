import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false
    }
  }

  logout = () => {
    localStorage.removeItem('isCandidate');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAdmin');
    this.setState({
      loggedOut: true
    });
  }

  render() {
    if(this.state.loggedOut) {
      return <Redirect to='/' />
    }
  return (
    <div>
      {this.logout()}
    </div>
    )
  }
}

export default Logout;
