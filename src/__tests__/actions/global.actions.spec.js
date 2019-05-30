import {
  showModal,
  closeModal,
  clearField
} from '../../actions/global.actions';


describe('Candidate actions', () => {
  it('should return correct action to show modal', () => {
    const action = showModal();
    expect(action).toEqual({
      type: 'SHOW_MODAL'
    });
  });

  it('should return correct action to close modal', () => {
    const action = closeModal();
    expect(action).toEqual({
      type: 'CLOSE_MODAL'
    });
  });

  it('should return correct action to clear field', () => {
    const action = clearField();
    expect(action).toEqual({
      type: 'CLEAR_FIELD'
    });
  });
});
