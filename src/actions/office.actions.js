import office from '../constants/office.constants';
import axios from '../config/axiosConfig';

const {
  CREATE_OFFICE_BEGIN,
  CREATE_OFFICE_SUCCESS,
  CREATE_OFFICE_FAILURE,
  GET_OFFICE_SUCCESS
} = office;

const createOfficeBegin = () => ({
  type: CREATE_OFFICE_BEGIN
});

const createOfficeSuccess = office => ({
  type: CREATE_OFFICE_SUCCESS,
  payload: office
});

const createOfficeFailure = error => ({
  type: CREATE_OFFICE_FAILURE,
  payload: error
});

const getOfficeSuccess = data => ({
  type: GET_OFFICE_SUCCESS,
  payload: data
});

const createOffice = (office) => (dispatch) => {
  dispatch(createOfficeBegin());
  axios.post('/offices', office)
  .then((response) => dispatch(createOfficeSuccess(response.data.data[0])))
  .catch((error) => dispatch(createOfficeFailure(error.response.data.error)))
}

const getOffices = () => (dispatch) => {   
  axios.get('/offices')
  .then((response) => dispatch(getOfficeSuccess(response.data.data)))
  .catch((error) => true)
}

export { createOffice, getOffices }
