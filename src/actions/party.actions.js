import axios from '../config/axiosConfig';
import party from '../constants/party.constants';

const {
  CREATE_PARTY_BEGIN,
  CREATE_PARTY_SUCCESS,
  CREATE_PARTY_FAILURE,
  GET_PARTY_SUCCESS
} = party;

const createPartyBegin = () => ({
  type: CREATE_PARTY_BEGIN
});

const createPartySuccess = (party = {}) => ({
  type: CREATE_PARTY_SUCCESS,
  payload: { party }
});

const createPartyFailure = (error = {}) => ({
  type: CREATE_PARTY_FAILURE,
  payload: { error }
});

const getPartySuccess = (data = {})=> ({
  type: GET_PARTY_SUCCESS,
  payload: data
})


const createParty = (party) => async (dispatch) => {
  try {
    dispatch(createPartyBegin());
    const response = await axios.post('/parties', party);
    dispatch(createPartySuccess(response.data.data[0]))
  } catch (error) {
    dispatch(createPartyFailure(error.response.data.error))
    }
}

const getParties = () => async (dispacth) => {
  try {
    const response = await axios.get('/parties');
    dispacth(getPartySuccess(response.data.data))
  } catch(error) {
    return true;
  }
}

export {
  createParty,
  getParties,
  createPartyBegin,
  createPartySuccess,
  createPartyFailure,
  getPartySuccess
};
