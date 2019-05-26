import { authReducer } from '../../reducers/auth.reducer';

const userSignUp = {
  firstname: 'Joe',
  lastname: 'Joey',
  othername: 'Joela',
  email: 'joey@joe.com',
  phone: '+234-090212394344',
  passportUrl: 'joe.jpg',
  password: 'Joela',
}

const initialState = {
  signupErrors: {},
  signupRedirect: false,
  submit: false,
  isAdmin: false
};

describe('authReducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toEqual({
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
    });
  });
  it('should handle SIGN UP BEGIN', () => {
    expect(authReducer(initialState, {
      type: 'SIGNUP_BEGIN'
    })).toEqual({
      ...initialState,
      signupErrors: {},
      submit: true,
    });
  });
  it('should handle SIGN UP SUCCESS', () => {
    expect(authReducer(initialState, {
      type: 'SIGNUP_SUCCESS'
    })).toEqual({
      ...initialState,
      signupRedirect: true,
      submit: false
    });
  });
  it('should handle SIGN UP FAILURE', () => {
    expect(authReducer(initialState, {
      type: 'SIGNUP_FAILURE',
      payload: { error: {response: { data: 'Some error occurred' }}}
    })).toEqual({
      ...initialState,
      signupRedirect: false,
      signupErrors: undefined,
    });
  });
});
