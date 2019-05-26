import axios from '../config/axiosConfig';
import candidate from '../constants/candidate.constants';

const { INDICATE_INTEREST_BEGIN, INDICATE_INTEREST_SUCCESS, INDICATE_INTEREST_FAILURE } = candidate;

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

const indicateInterest = (candidate, config) => (dispatch) => {
  dispatch(indicateInterestBegin());
  axios.post('/interests', candidate, config)
  .then((response) => dispatch(indicateInterestSuccess(response.data.data[0])))
  .catch((error) => dispatch(indicateInterestFailure(error.response.data.error)))
}

export { indicateInterest };
