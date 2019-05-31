import party from '../constants/party.constants';

const { CREATE_PARTY_BEGIN, CREATE_PARTY_SUCCESS, CREATE_PARTY_FAILURE, GET_PARTY_SUCCESS, GET_PARTY_FAILURE } = party;

const initialState = {
  name: '',
  logoUrl: '',
  hqAddress: '',
  errors: {},
  submit: false,
  redirect: false,
  getParties: []
};

const partyReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_PARTY_BEGIN:
      return {
        ...state,
        submit: true
      };
    case CREATE_PARTY_SUCCESS:
      return {
        ...state,
        submit: false,
        getParties: [actions.payload.party],
        redirect: true
      };
    case CREATE_PARTY_FAILURE:
      return {
        ...state,
        submit: false,
        errors: actions.payload.error,
        redirect: false
      }
    case GET_PARTY_SUCCESS:
      return {
        ...state,
        getParties: actions.payload
      } 
    default:
      return state;
  }
}

export { partyReducer, initialState };
