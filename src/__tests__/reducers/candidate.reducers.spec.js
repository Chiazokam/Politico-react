import { candidateReducer, initialState } from '../../reducers/candidate.reducers';

describe('Candidate Reducer', () => {
  it('should return initial state', () => {
    expect(candidateReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should handle INDICATE INTEREST BEGIN', () => {
    expect(candidateReducer(initialState, {
      type: 'INDICATE_INTEREST_BEGIN'
    })).toEqual({
      ...initialState,
      submit: true
    });
  });

  it('should handle INDICATE INTEREST SUCCESS', () => {
    expect(candidateReducer(initialState, {
      type: 'INDICATE_INTEREST_SUCCESS'
    })).toEqual({
      ...initialState,
      submit: false,
      redirect: true
    });
  });

  it('should return GET_CANDIDATES', () => {
    expect(candidateReducer(initialState, {
      type: 'GET_CANDIDATES',
      payload: []
    })).toEqual({
      ...initialState,
      candidates: []
    });
  });

  it('should return CREATE_CANDIDATE_BEGIN', () => {
    expect(candidateReducer(initialState, {
      type: 'CREATE_CANDIDATE_BEGIN',
    })).toEqual({
      ...initialState,
      submitCandidate: true
    });
  });

  it('should return CREATE_CANDIDATE_SUCCESS', () => {
    expect(candidateReducer(initialState, {
      type: 'CREATE_CANDIDATE_SUCCESS',
      payload: {}
    })).toEqual({
      ...initialState,
      submitCandidate: false,
      candidateRedirect: true,
      approvedCandidate: {}
    });
  });

  it('should return CREATE_CANDIDATE_FAILURE', () => {
    expect(candidateReducer(initialState, {
      type: 'CREATE_CANDIDATE_FAILURE',
      payload: {}
    })).toEqual({
      ...initialState,
      submitCandidate: false,
      candidateErrors: {}
    });
  });
  
  it('should return CLEAR_ERRORS', () => {
    expect(candidateReducer(initialState, {
      type: 'CLEAR_ERRORS'
    })).toEqual({
      ...initialState,
      candidateErrors: ''
    });
  });
});
