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
  redirect: false,
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
        redirect: true,
        submit: false,
    }
    
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupErrors: action.payload.error.response.data.error,
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
        redirect: true,
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