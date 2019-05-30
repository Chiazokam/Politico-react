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

const createOfficeSuccess = (office = {}) => ({
  type: CREATE_OFFICE_SUCCESS,
  payload: office
});

const createOfficeFailure = (error = {})=> ({
  type: CREATE_OFFICE_FAILURE,
  payload: error
});

const getOfficeSuccess = (data = {}) => ({
  type: GET_OFFICE_SUCCESS,
  payload: data
});

const createOffice = (office) => async (dispatch) => {
  try {
    dispatch(createOfficeBegin());
    const response = await axios.post('/offices', office)
    dispatch(createOfficeSuccess(response.data.data[0]))
  } catch (error) {
    dispatch(createOfficeFailure(error.response.data.error))
    }
}

const getOffices = () => async (dispatch) => {
  try {
    const response = await axios.get('/offices');
    dispatch(getOfficeSuccess(response.data.data))
  } catch(error) {
    return true;
  }
}

export {
  createOffice,
  getOffices,
  createOfficeBegin,
  createOfficeSuccess,
  createOfficeFailure,
  getOfficeSuccess
}
