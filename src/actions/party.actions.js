import axios from '../config/axiosConfig';
import party from '../constants/party.constants';

const { CREATE_PARTY_BEGIN, CREATE_PARTY_SUCCESS, CREATE_PARTY_FAILURE, GET_PARTY_SUCCESS } = party;

const createPartyBegin = () => ({
  type: CREATE_PARTY_BEGIN
});

const createPartySuccess = party => ({
  type: CREATE_PARTY_SUCCESS,
  payload: { party }
});

const createPartyFailure = error => ({
  type: CREATE_PARTY_FAILURE,
  payload: { error }
});

const getPartySuccess = data => ({
  type: GET_PARTY_SUCCESS,
  payload: data
})


const createParty = (party) => (dispatch) => {
  dispatch(createPartyBegin());
  axios.post('/parties', party)
  .then((response) => dispatch(createPartySuccess(response.data.data[0])))
  .catch((error) => dispatch(createPartyFailure(error.response.data.error)))
}

const getParties = () => (dispacth) => {
  axios.get('/parties')
  .then((response) => dispacth(getPartySuccess(response.data.data)))
  .catch((error) => true)
}

export { createParty,getParties };
