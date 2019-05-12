import { CL } from '../constants/global.constants';
const showModal= () => ({
  type: 'SHOW_MODAL',
});

const closeModal= () => ({
  type: 'CLOSE_MODAL',
});

const clearField= () => ({
  type: 'CLEAR_FIELD',
});

export { showModal, closeModal, clearField };
