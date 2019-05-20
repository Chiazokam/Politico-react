import axios from '../config/axiosConfig';
import user from '../constants/user.constants';

const { GET_USER_CANDIDACY_SUCCESS, GET_USER_CANDIDACY_FAILURE } = user;

const getCandidacySuccess = (isCandidate = true) => ({
  type: GET_USER_CANDIDACY_SUCCESS,
  payload: isCandidate
});

const getCandidacyFailure = () => ({
  type: GET_USER_CANDIDACY_FAILURE,
  payload: false
});

const getCandidacy = (id, config) => (dispatch) => {
  axios.get(`/candidates/${id}/user`, config)
  .then((response) => {
    dispatch(getCandidacySuccess(response.data.data.candidate));
    localStorage.setItem('isCandidate', response.data.data.candidate)
  })
  .catch((error) => {
    dispatch(getCandidacyFailure());
    localStorage.setItem('isCandidate', false)
  })
} 

export { getCandidacy, getCandidacySuccess, getCandidacyFailure };
