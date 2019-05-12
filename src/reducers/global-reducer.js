import global from '../constants/global.constants';

const { CLEAR_FIELD, SHOW_MODAL, CLOSE_MODAL } = global;

const initialState = {
  isModalOpen: false,
  errors: {},
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
    return {
      ...state,
      isModalOpen: false,
    };
    case CLEAR_FIELD:
    return {
      ...state,
      errors: {},
    };
    default:
      return state;
  }
}

export default globalReducer;
