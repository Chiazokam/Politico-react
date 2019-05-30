import "@babel/polyfill";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import MockAdapter from 'axios-mock-adapter';
import office from '../../constants/office.constants';
import {
  createOffice,
  getOffices,
  createOfficeBegin,
  createOfficeSuccess,
  createOfficeFailure,
  getOfficeSuccess
} from '../../actions/office.actions';

const {
  CREATE_OFFICE_BEGIN,
  CREATE_OFFICE_SUCCESS,
  CREATE_OFFICE_FAILURE,
  GET_OFFICE_SUCCESS
  } = office;

  const middleware = [thunk];
  const mock = new MockAdapter(axios);
  const mockedStore = configureMockStore(middleware);
  const store = mockedStore();

describe('Office actions', () => {
  it('should return correct action for create office begin', () => {
    const action = createOfficeBegin();
    expect(action).toEqual({
      type: CREATE_OFFICE_BEGIN
    });
  });

  it('should return correct action for create office success', () => {
    const action = createOfficeSuccess();
    expect(action).toEqual({
      type: CREATE_OFFICE_SUCCESS,
      payload: {}
    });
  });

  it('should return correct action for get office', () => {
    const action = getOfficeSuccess();
    expect(action).toEqual({
      type: GET_OFFICE_SUCCESS,
      payload: {}
    });
  });

  it('should return correct action for create office failure', () => {
    const action = createOfficeFailure();
    expect(action).toEqual({
      type: CREATE_OFFICE_FAILURE,
      payload: {}
    });
  });

  it('should return correct dispatch after API call for creating office', () => {
    mock.onPost('/offices').reply({
      id: '2',
      name: 'President',
      type: 'Federal'
    });

    const expectedAction = [
      {
        type: CREATE_OFFICE_BEGIN
      }
    ];

    store.dispatch(createOffice()).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })

  it('should return correct dispatch after API call for getting offices', () => {
    mock.onGet('/offices').reply([]);

    const expectedAction = [
      {
        type: GET_OFFICE_SUCCESS
      }
    ];

    store.dispatch(getOffices()).catch(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  })
});
