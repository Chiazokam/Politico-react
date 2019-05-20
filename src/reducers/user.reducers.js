import user from '../constants/user.constants';

const { GET_USER_CANDIDACY_FAILURE, GET_USER_CANDIDACY_SUCCESS } = user;

const initialState = {
  isCandidate: false,
  message: ''
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_USER_CANDIDACY_SUCCESS:
      return {
        ...state,
        isCandidate: actions.payload
      };
    case GET_USER_CANDIDACY_FAILURE:
      return {
        ...state,
        isCandidate: actions.payload
      };
    default:
      return state;
  }
}

export { userReducer, initialState };
