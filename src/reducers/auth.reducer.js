import auth from '../constants/auth.constants';

const { SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNIN_BEGIN, SIGNIN_SUCCESS, SIGNIN_FAILURE } = auth;

const initialState = {
  firstname: '',
  lastname: '',
  othername: '',
  email: '',
  phone: '',
  passportUrl: '',
  password: '',
  signupErrors: {},
  loginErrors: {},
  signupRedirect: false,
  signinRedirect: false,
  submit: false,
  isAdmin: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_BEGIN:
      return {
        ...state,
        signupErrors: {},
        submit: true,
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupRedirect: true,
        submit: false,
    }
    
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupErrors: action.payload,
        submit: false,
      }
      
    case SIGNIN_BEGIN:
      return {
        ...state,
        loginErrors: {},
        submit: true,
      }

    case SIGNIN_SUCCESS:
      return {
        ...state,
        signinRedirect: true,
        submit: false,
        user: action.payload.user,
        isAdmin: action.payload.decode
    }
    
    case SIGNIN_FAILURE:
      return {
        ...state,
        loginErrors: action.payload.error.data.error,
        submit: false,
      }

    default:
      return state;
  }
}

export { authReducer, initialState };
