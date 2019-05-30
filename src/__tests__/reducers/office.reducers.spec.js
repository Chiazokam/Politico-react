import { officeReducer, initialState } from '../../reducers/office.reducers';

describe('Office Reducer', () => {
  it('should return initial state', () => {
    expect(officeReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('should handle CREATE_OFFICE_BEGIN', () => {
    expect(officeReducer(initialState, {
      type: 'CREATE_OFFICE_BEGIN'
    })).toEqual({
      ...initialState,
      submit: true
    });
  });

  it('should handle CREATE_OFFICE_SUCCESS', () => {
    expect(officeReducer(initialState, {
      type: 'CREATE_OFFICE_SUCCESS',
      payload: {}
    })).toEqual({
      ...initialState,
      submit: false,
      office: {},
      redirect: true
    });
  });

  it('should return CREATE_OFFICE_FAILURE', () => {
    expect(officeReducer(initialState, {
      type: 'CREATE_OFFICE_FAILURE',
      payload: {
        error: {}
      }
    })).toEqual({
      ...initialState,
      submit: false,
      errors: {},
      redirect: false
    });
  });

  it('should return GET_OFFICE_SUCCESS', () => {
    expect(officeReducer(initialState, {
      type: 'GET_OFFICE_SUCCESS',
      payload: []
    })).toEqual({
      ...initialState,
      getOffices: []
    });
  });
});
