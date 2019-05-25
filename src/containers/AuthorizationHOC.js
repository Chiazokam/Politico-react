import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { tokenExpired } from '../utils';

const token = localStorage.getItem('token');

const AuthorizationHOC = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (token && !tokenExpired(token)) {
        return Component ? <Component {...props} /> : render(props)
      }
      return <Redirect to="/login" />
    }}
  />
);

export default AuthorizationHOC;
