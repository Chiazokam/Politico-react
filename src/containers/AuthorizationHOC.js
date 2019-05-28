import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { tokenExpired } from '../utils';
import axios from '../config/axiosConfig';


const AuthorizationHOC = ({ component: Component, render, ...rest }) => (
  
  <Route
    {...rest}
    render={props => {
    const token = localStorage.getItem('token');
      if (token && !tokenExpired(token)) {
        axios.defaults.headers.common['token'] = token;
        return Component ? <Component {...props} /> : render(props)
      }
      return <Redirect to="/login" />
    }}
  />
);

export default AuthorizationHOC;
