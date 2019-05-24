import office from '../constants/office.constants';

const { CREATE_OFFICE_BEGIN, CREATE_OFFICE_SUCCESS, CREATE_OFFICE_FAILURE } = office;

const initialState = {
  name: '',
  type: '',
  errors: {},
  submit: false,
  redirect: false
};

const officeReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_OFFICE_BEGIN:
      return {
        ...state,
        submit: true
      };
    case CREATE_OFFICE_SUCCESS:
      return {
        ...state,
        submit: false,
        office: actions.payload,
        redirect: true
      };
    case CREATE_OFFICE_FAILURE:
      return {
        ...state,
        submit: false,
        errors: actions.payload.error,
        redirect: false
      }
    default:
      return state;
  }
}

export { officeReducer, initialState };
