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

const initialState = {
  submit: false,
  submitCandidate: false,
  redirect: false,
  errors: {},
  candidateErrors: '',
  candidates: [],
  approvedCandidate: {},
  candidateRedirect: false
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
    case GET_CANDIDATES:
      return {
        ...state,
        candidates: actions.payload
      }
    case CREATE_CANDIDATE_BEGIN:
      return {
        ...state,
        submitCandidate: true
      }
    case CREATE_CANDIDATE_SUCCESS:
      return {
        ...state,
        submitCandidate: false,
        candidateRedirect: true,
        approvedCandidate: actions.payload
      }
    case CREATE_CANDIDATE_FAILURE:
      return {
        ...state,
        submitCandidate: false,
        candidateErrors: actions.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        candidateErrors: ''
      }
    default:
      return state;
  }
}

export { candidateReducer };
