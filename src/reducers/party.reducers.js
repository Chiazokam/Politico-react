import party from '../constants/party.constants';

const { CREATE_PARTY_BEGIN, CREATE_PARTY_SUCCESS, CREATE_PARTY_FAILURE } = party;

const initialState = {
  name: '',
  logoUrl: '',
  hqAddress: '',
  errors: {},
  submit: false,
  redirect: false
};

const partyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTY_BEGIN:
      return {
        ...state,
        submit: true
      };
    case CREATE_PARTY_SUCCESS:
      return {
        ...state,
        submit: false,
        party: action.payload.party,
        redirect: true
      };
    case CREATE_PARTY_FAILURE:
      return {
        ...state,
        submit: false,
        errors: action.payload.error,
        redirect: false
      } 
    default:
      return state;
  }
}

export default partyReducer;
