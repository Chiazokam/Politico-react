import { partyReducer, initialState } from '../../reducers/party.reducers';

const party = {
  name: 'Slay Party',
  logoUrl: 'slay.jpg',
  hqAddress: 'Abuja',
}

describe('partyReducer', () => {
  it('should return initial state', () => {
    expect(partyReducer(undefined, {})).toEqual({
      ...initialState
    });
  });
  it('should handle SIGN IN BEGIN', () => {
    expect(partyReducer(initialState, {
      type: 'CREATE_PARTY_BEGIN'
    })).toEqual({
      ...initialState,
      submit: true,
    });
  });
  it('should handle CREATE PARTY SUCCESS', () => {
    expect(partyReducer(initialState, {
      type: 'CREATE_PARTY_SUCCESS',
      payload: { party }
    })).toEqual({
      ...initialState,
      redirect: true,
      submit: false,
      getParties: [{
        name: 'Slay Party',
        logoUrl: 'slay.jpg',
        hqAddress: 'Abuja',
      }]
    });
  });
  it('should handle SIGN IN FAILURE', () => {
    expect(partyReducer(initialState, {
      type: 'CREATE_PARTY_FAILURE',
      payload: { error: 'error' }
    })).toEqual({
      ...initialState,
      redirect: false,
      submit: false,
      errors: 'error'
    });
  });

  it('should return GET_PARTY_SUCCESS', () => {
    expect(partyReducer(initialState, {
      type: 'GET_PARTY_SUCCESS',
      payload: []
    })).toEqual({
      ...initialState,
      getParties: []
    });
  });
});
