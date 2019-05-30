import "@babel/polyfill";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import MockAdapter from 'axios-mock-adapter';
import user from '../../constants/user.constants';
import {
  getCandidacy,
  getCandidacySuccess,
  getCandidacyFailure
} from '../../actions/user.actions';

const {
  GET_USER_CANDIDACY_SUCCESS,
  GET_USER_CANDIDACY_FAILURE
  } = user;

  const middleware = [thunk];
  const mock = new MockAdapter(axios);
  const mockedStore = configureMockStore(middleware);
  const store = mockedStore();

describe('User actions', () => {
  it('should return correct action for getting user candidacy successfully', () => {
    const action = getCandidacySuccess();
    expect(action).toEqual({
      type: GET_USER_CANDIDACY_SUCCESS,
      payload: true
    });
  });

  it('should return correct action for getting user candidacy failure', () => {
    const action = getCandidacyFailure();
    expect(action).toEqual({
      type: GET_USER_CANDIDACY_FAILURE,
      payload: false
    });
  });

  it('should return correct dispatch after API call for getting parties', () => {
    mock.onGet('/candidates/2/user').reply([]);

    const expectedAction = [
      {
        type: GET_USER_CANDIDACY_SUCCESS
      }
    ];

    store.dispatch(getCandidacy()).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
});
