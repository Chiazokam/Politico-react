import "@babel/polyfill";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../config/axiosConfig';
import candidate from '../../constants/candidate.constants';
import {
  indicateInterest,
  getCandidatesRequest,
  createCandidate,
  clearErrors,
  indicateInterestBegin,
  indicateInterestSuccess,
  indicateInterestFailure,
  getCandidates,
  createCandidateBegin,
  createCandidateSuccess,
  createCandidateFailure
} from '../../actions/candidate.actions';

const {
  INDICATE_INTEREST_BEGIN,
  INDICATE_INTEREST_SUCCESS,
  INDICATE_INTEREST_FAILURE,
  GET_CANDIDATES,
  CREATE_CANDIDATE_BEGIN,
  CREATE_CANDIDATE_SUCCESS,
  CREATE_CANDIDATE_FAILURE,
  CLEAR_ERRORS
  } = candidate;

const interestPayload = {
  party: '4',
  office: '3',
  userId: '1'
}

const candidatePayload = {
  party: '4',
  office: '3'
}

const candidateResponse = {
  party: '4',
  office: '3',
  id: '5'
}

const interestResponse = {
  party: '4',
  office: '3',
  userId: '1',
  id: '2'
}

const middleware = [thunk];
const mock = new MockAdapter(axios);
const mockedStore = configureMockStore(middleware);
const store = mockedStore();

describe('Candidate actions', () => {
  it('should return correct action indicate interest begin', () => {
    const action = indicateInterestBegin();
    expect(action).toEqual({
      type: INDICATE_INTEREST_BEGIN
    });
  });

    it('should return correct action create candidate begin', () => {
      const action = createCandidateBegin();
      expect(action).toEqual({
        type: CREATE_CANDIDATE_BEGIN
      });
    });

  it('should return correct action for indicate interest success', () => {
    const action = indicateInterestSuccess();
    expect(action).toEqual({
      type: INDICATE_INTEREST_SUCCESS,
      payload: {}
    });
  });

  it('should return correct action for create candidate success', () => {
    const action = createCandidateSuccess();
    expect(action).toEqual({
      type: CREATE_CANDIDATE_SUCCESS,
      payload: {}
    });
  });

  it('should return correct action for get candidates', () => {
    const action = getCandidates();
    expect(action).toEqual({
      type: GET_CANDIDATES,
      payload: []
    });
  });

  it('should return correct action for indicate interest failure', () => {
    const action = indicateInterestFailure();
    expect(action).toEqual({
      type: INDICATE_INTEREST_FAILURE,
      payload: {}
    });
  });

  it('should return correct action for create candidate failure', () => {
    const action = createCandidateFailure();
    expect(action).toEqual({
      type: CREATE_CANDIDATE_FAILURE,
      payload: {}
    });
  });

  it('should return correct action for indicate interest failure', () => {
    const action = indicateInterestFailure();
    expect(action).toEqual({
      type: INDICATE_INTEREST_FAILURE,
      payload: {}
    });
  });

  it('should return correct action for clear errors', () => {
    const action = clearErrors();
    expect(action).toEqual({
      type: CLEAR_ERRORS
    });
  });

  it('should return correct dispatch after API call for indicating interest', () => {
    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: interestResponse }));
    const expected = {
      type: INDICATE_INTEREST_BEGIN
    };

    return store.dispatch(indicateInterest(interestPayload))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });

  it('should return correct dispatch after API call for creating candidate', () => {
    mock.onPost('/offices/2/register').reply(candidateResponse);

    const expectedAction = [
      {
        type: CREATE_CANDIDATE_BEGIN
      }
    ];

    store.dispatch(createCandidate(candidatePayload, '2')).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should return correct dispatch after API call for getting candidates', () => {
    mock.onGet('/interests').reply([]);

    const expectedAction = [
      {
        type: GET_CANDIDATES
      }
    ];

    store.dispatch(getCandidatesRequest()).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
});
