import axios from '../config/axiosConfig';
import candidate from '../constants/candidate.constants';

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

const indicateInterestBegin = () => ({
  type: INDICATE_INTEREST_BEGIN
});

const indicateInterestSuccess = (candidate = {}) => ({
  type: INDICATE_INTEREST_SUCCESS,
  payload: candidate
});

const indicateInterestFailure = (error = {}) => ({
  type: INDICATE_INTEREST_FAILURE,
  payload: error
});

const getCandidates = (candidates = [])=> ({
  type: GET_CANDIDATES,
  payload: candidates
});

const createCandidateBegin = () => ({
  type: CREATE_CANDIDATE_BEGIN
})

const createCandidateSuccess = (candidate = {}) => ({
  type: CREATE_CANDIDATE_SUCCESS,
  payload: candidate
})

const createCandidateFailure = (error = {}) => ({
  type: CREATE_CANDIDATE_FAILURE,
  payload: error
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

const indicateInterest = (candidate) => async (dispatch) => {
  try {
    dispatch(indicateInterestBegin());
    const response = await axios.post('/interests', candidate);
    dispatch(indicateInterestSuccess(response.data.data[0]))
  } catch (error) {
    dispatch(indicateInterestFailure(error.response))
    }
}

const getCandidatesRequest = () => async (dispatch) => {
  try {
    const response = await axios.get('/interests');
    dispatch(getCandidates(response.data.data));
  } catch(error) {
    return true;
  }
}

const createCandidate = (candidate, id) => async (dispatch) => {
  try {
    dispatch(createCandidateBegin());
    const response = await axios.post(`/offices/${id}/register`, candidate);
    dispatch(createCandidateSuccess(response.data.data[0]))
  } catch (error) {
    dispatch(createCandidateFailure(error.response.data.error))
    }
}

export {
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
};
