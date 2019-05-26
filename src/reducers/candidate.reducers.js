import candidate from '../constants/candidate.constants';

const { INDICATE_INTEREST_BEGIN, INDICATE_INTEREST_SUCCESS, INDICATE_INTEREST_FAILURE } = candidate;

const initialState = {
  submit: false,
  redirect: false,
  errors: {}
}

const candidateReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case INDICATE_INTEREST_BEGIN:
      return {
        ...state,
        submit: true
      };
    case INDICATE_INTEREST_SUCCESS:
      return {
        ...state,
        submit: false,
        redirect: true
      };
    case INDICATE_INTEREST_FAILURE:
      return {
        ...state,
        submit: false,
        errors: actions.payload,
        redirect: false
      }
    default:
      return state;
  }
}

export { candidateReducer };
