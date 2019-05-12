import { authReducer } from '../../reducers/auth.reducer';

const userLogin = {
  email: 'joey@joe.com',
  password: 'Joela',
}

const initialState = {
  loginErrors: {},
  redirect: false,
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
      redirect: false,
      submit: false,
      isAdmin: false
    });
  });
  it('should handle SIGN IN BEGIN', () => {
    expect(authReducer(initialState, {
      type: 'SIGNIN_BEGIN'
    })).toEqual({
      ...initialState,
      loginErrors: {},
      submit: true,
    });
  });
  it('should handle SIGN IN SUCCESS', () => {
    expect(authReducer(initialState, {
      type: 'SIGNIN_SUCCESS',
      payload: { userLogin }
    })).toEqual({
      ...initialState,
      redirect: true,
      submit: false,
      user: undefined,
      isAdmin: undefined
    });
  });
  it('should handle SIGN IN FAILURE', () => {
    expect(authReducer(initialState, {
      type: 'SIGNIN_FAILURE',
      payload: { error: { data: 'Some error occurred' }}
    })).toEqual({
      ...initialState,
      redirect: false,
      loginErrors: undefined,
    });
  });
});
