import "@babel/polyfill";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import MockAdapter from 'axios-mock-adapter';
import auth from '../../constants/auth.constants';
import {
  signinBegin,
  signinSuccess,
  signinFailure,
  signupBegin,
  signupSuccess,
  signupFailure,
  signinUser,
  signupUser
} from '../../actions';

const {
  SIGNIN_BEGIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
  } = auth;

const signupUserObject = {
  email: 'dan@dan.com',
  firstname: 'Dan',
  lastname: 'Mark',
  username: 'Dimkpa',
  passporturl: 'dan.jpg',
  password: 'Dan',
  phone: '+234-7059201839'
};

const signupUserResponse = {
  id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e',
  email: 'dan@dan.com',
  firstname: 'Dan',
  lastname: 'Mark',
  username: 'Dimkpa',
  passporturl: 'dan.jpg',
  phone: '+234-7059201839'
};

const signinUserObject = {
  email: 'dan@dan.com',
  password: 'Dan'
};

const signinUserResponse = {
  id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e',
  email: 'dan@dan.com',
  firstname: 'Dan',
  lastname: 'Mark',
  username: 'Dimkpa',
  passporturl: 'dan.jpg',
  phone: '+234-7059201839'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);


describe('Auth actions', () => {

  it('should return correct action sign in begin', () => {
    const action = signinBegin();
    expect(action).toEqual({
      type: SIGNIN_BEGIN
    });
  });

  it('should return correct action sign up begin', () => {
    const action = signupBegin();
    expect(action).toEqual({
      type: SIGNUP_BEGIN
    });
  });

  it('should return correct action for sign in success', () => {
    const action = signinSuccess();
    expect(action).toEqual({
      type: SIGNIN_SUCCESS,
      payload: {
        user: {},
        decode: {}
      }
    });
  });

  it('should return correct action for sign up success', () => {
    const action = signupSuccess();
    expect(action).toEqual({
      type: SIGNUP_SUCCESS
    });
  });

  it('should return correct action for sign in failure', () => {
    const action = signinFailure();
    expect(action).toEqual({
      type: SIGNIN_FAILURE,
      payload: {
        error: {}
      }
    });
  });

  it('should return correct action for sign up failure', () => {
    const action = signupFailure();
    expect(action).toEqual({
      type: SIGNUP_FAILURE,
      payload: {}
    });
  });

  it('should return correct dispatch after API call for sign in', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: signinUserResponse }));
    const expected = {
      type: SIGNIN_BEGIN
    };

    return store.dispatch(signinUser(signinUserObject))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });

  it('should return correct dispatch after API call for sign up', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: signupUserObject }));
    const expected = {
      type: SIGNUP_BEGIN
    };

    return store.dispatch(signupUser(signupUserResponse))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });
});
