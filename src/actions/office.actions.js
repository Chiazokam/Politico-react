import office from '../constants/office.constants';
import axios from '../config/axiosConfig';

const { CREATE_OFFICE_BEGIN, CREATE_OFFICE_SUCCESS, CREATE_OFFICE_FAILURE } = office;

const createOfficeBegin = () => ({
  type: CREATE_OFFICE_BEGIN
});

const createOfficeSuccess = office => ({
  type: CREATE_OFFICE_SUCCESS,
  payload: office
});

const createOfficeFailure = error => ({
  type: CREATE_OFFICE_FAILURE,
  payload: { error }
});

const createOffice = (office, config) => (dispatch) => {
  dispatch(createOfficeBegin());
  axios.post('/offices', office, config)
  .then((response) => dispatch(createOfficeSuccess(response.data.data[0])))
  .catch((error) => dispatch(createOfficeFailure(error.response.data.error)))
}

export { createOffice }
