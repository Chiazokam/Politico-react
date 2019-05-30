import axios from '../config/axiosConfig';
import auth from '../constants/auth.constants';

const { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNIN_BEGIN, SIGNIN_SUCCESS, SIGNIN_FAILURE } = auth;

const signupBegin= () => ({
  type: SIGNUP_BEGIN,
});

const signupSuccess= () => ({
  type: SIGNUP_SUCCESS,
});

const signupFailure= (error = {}) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

const signinBegin= () => ({
  type: SIGNIN_BEGIN,
});

const signinSuccess= (user = {}, decode = {}) => ({
  type: SIGNIN_SUCCESS,
  payload: { 
    user,
    decode
   }
});

const signinFailure = (error = {}) => ({
  type: SIGNIN_FAILURE,
  payload: { error },
});

const signupUser = user => async (dispatch) => {
  try {
    dispatch(signupBegin());
    const response = await axios.post('/auth/signup', user)
    dispatch(signupSuccess())
  } catch (error) {
    dispatch(signupFailure(error.response.data.error))
    }
  }

const signinUser = userObj => async (dispatch) => {
    try {
      dispatch(signinBegin());
      const response = await axios.post('/auth/login', userObj);
      const { token, user } = response.data.data[0];
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      const base64Url = token.split('.')[1];
      const decode = JSON.parse(window.atob(base64Url));
      localStorage.setItem('isAdmin', decode.isAdmin);
      dispatch(signinSuccess(user, decode.isAdmin))
    } catch (error) {
      dispatch(signinFailure(error.response))
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
