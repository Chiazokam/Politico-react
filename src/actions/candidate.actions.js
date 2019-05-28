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

const indicateInterestSuccess = candidate => ({
  type: INDICATE_INTEREST_SUCCESS,
  payload: candidate
});

const indicateInterestFailure = error => ({
  type: INDICATE_INTEREST_FAILURE,
  payload: error
});

const getCandidates = candidates => ({
  type: GET_CANDIDATES,
  payload: candidates
});

const createCandidateBegin = () => ({
  type: CREATE_CANDIDATE_BEGIN
})

const createCandidateSuccess = (candidate) => ({
  type: CREATE_CANDIDATE_SUCCESS,
  payload: candidate
})

const createCandidateFailure = (error) => ({
  type: CREATE_CANDIDATE_FAILURE,
  payload: error
})

const clearErrors = () => ({
  type: CLEAR_ERRORS
})

const indicateInterest = (candidate) => (dispatch) => {
  dispatch(indicateInterestBegin());
  axios.post('/interests', candidate)
  .then((response) => dispatch(indicateInterestSuccess(response.data.data[0])))
  .catch((error) => dispatch(indicateInterestFailure(error.response.data.error)))
}

const getCandidatesRequest = () => (dispatch) => {
  axios.get('/interests')
  .then((response) => dispatch(getCandidates(response.data.data)))
  .catch((error) => true)
}

const createCandidate = (candidate, id) => (dispatch) => {
  dispatch(createCandidateBegin());
  axios.post(`/offices/${id}/register`, candidate)
  .then((response) => dispatch(createCandidateSuccess(response.data.data[0])))
  .catch((error) => dispatch(createCandidateFailure(error.response.data.error)))
}

export { indicateInterest, getCandidatesRequest, createCandidate, clearErrors };
