import axios from 'axios';
import auth from '../constants/auth.constants';
import { Url } from '../components/global';

const { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNIN_BEGIN, SIGNIN_SUCCESS, SIGNIN_FAILURE } = auth;

const signupBegin= () => ({
  type: SIGNUP_BEGIN,
});

const signupSuccess= () => ({
  type: SIGNUP_SUCCESS,
});

const signupFailure= error => ({
  type: SIGNUP_FAILURE,
  payload: { error },
});

const signinBegin= () => ({
  type: SIGNIN_BEGIN,
});

const signinSuccess= (user, decode) => ({
  type: SIGNIN_SUCCESS,
  payload: { 
    user,
    decode
   }
});

const signinFailure= error => ({
  type: SIGNIN_FAILURE,
  payload: { error },
});

const signupUser = user => {
  return dispatch => {
    dispatch(signupBegin());
    axios.post(`${Url.herokuUrl}/auth/signup`, user)
    .then((response) => dispatch(signupSuccess()))
    .catch((error) => dispatch(signupFailure(error)))
  }
}

const signinUser = user => {
  return dispatch => {
    dispatch(signinBegin());
    axios.post(`${Url.herokuUrl}/auth/login`, user)
    .then((response) => {
      const { token, user } = response.data.data[0];
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      const base64Url = token.split('.')[1];
      const decode = JSON.parse(window.atob(base64Url));
      dispatch(signinSuccess(user, decode.isAdmin))

    })
    .catch((error) => dispatch(signinFailure(error.response)))
  }
}

export { signupBegin,
        signupSuccess,
        signupFailure,
        signupUser,
        signinBegin,
        signinSuccess,
        signinFailure,
        signinUser
      };
