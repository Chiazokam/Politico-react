import { userReducer, initialState } from '../../reducers/user.reducers';

describe('User Reducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should handle GET_USER_CANDIDACY_SUCCESS', () => {
    expect(userReducer(initialState, {
      type: 'GET_USER_CANDIDACY_SUCCESS',
      payload: true
    })).toEqual({
      ...initialState,
      isCandidate: true
    });
  });

  it('should return GET_USER_CANDIDACY_FAILURE', () => {
    expect(userReducer(initialState, {
      type: 'GET_USER_CANDIDACY_FAILURE',
      payload: false
    })).toEqual({
      ...initialState,
      isCandidate: false
    });
  });
});
