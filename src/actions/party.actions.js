import axios from 'axios';
import { Url } from '../components/global';
import party from '../constants/party.constants';

const { CREATE_PARTY_BEGIN, CREATE_PARTY_SUCCESS, CREATE_PARTY_FAILURE } = party;

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

const createParty = (party, config) => (dispatch) => {
  dispatch(createPartyBegin());
  axios.post(`${Url.herokuUrl}/parties`, party, config)
  .then((response) => dispatch(createPartySuccess(response.data.data[0])))
  .catch((error) => dispatch(createPartyFailure(error.response.data.error)))
}

export { createParty };
