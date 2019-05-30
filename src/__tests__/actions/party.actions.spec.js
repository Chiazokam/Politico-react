import "@babel/polyfill";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import MockAdapter from 'axios-mock-adapter';
import party from '../../constants/party.constants';
import {
  createParty,
  getParties,
  createPartyBegin,
  createPartySuccess,
  createPartyFailure,
  getPartySuccess
} from '../../actions/party.actions';

const {
  CREATE_PARTY_BEGIN,
  CREATE_PARTY_SUCCESS,
  CREATE_PARTY_FAILURE,
  GET_PARTY_SUCCESS
  } = party;

  const middleware = [thunk];
  const mock = new MockAdapter(axios);
  const mockedStore = configureMockStore(middleware);
  const store = mockedStore();

describe('Party actions', () => {
  it('should return correct action for create party begin', () => {
    const action = createPartyBegin();
    expect(action).toEqual({
      type: CREATE_PARTY_BEGIN
    });
  });

  it('should return correct action for create party success', () => {
    const action = createPartySuccess();
    expect(action).toEqual({
      type:CREATE_PARTY_SUCCESS,
      payload: {
        party: {}
      }
    });
  });

  it('should return correct action for create party failure', () => {
    const action = createPartyFailure();
    expect(action).toEqual({
      type: CREATE_PARTY_FAILURE,
      payload: {
        error: {}
      }
    });
  });

  it('should return correct action for get party success', () => {
    const action = getPartySuccess();
    expect(action).toEqual({
      type: GET_PARTY_SUCCESS,
      payload: {}
    });
  });

  it('should return correct dispatch after API call for creating a party', () => {
    mock.onPost('/parties').reply({
      id: '2',
      name: 'New Party',
      logourl: 'fine.jpg',
      hqAddress: 'Lagos'
    });

    const expectedAction = [
      {
        type: CREATE_PARTY_BEGIN
      }
    ];

    store.dispatch(createParty()).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should return correct dispatch after API call for getting parties', () => {
    mock.onGet('/parties').reply([]);

    const expectedAction = [
      {
        type: GET_PARTY_SUCCESS
      }
    ];

    store.dispatch(getParties()).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
});
