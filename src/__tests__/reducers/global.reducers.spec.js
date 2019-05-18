import { globalReducer, initialState } from '../../reducers/global-reducer';

describe('globalReducer', () => {
  it('should return initial state', () => {
    expect(globalReducer(undefined, {})).toEqual({
      ...initialState
    });
  });
  it('should handle SHOW MODAL', () => {
    expect(globalReducer(initialState, {
      type: 'SHOW_MODAL'
    })).toEqual({
      ...initialState,
      isModalOpen: true
    });
  });
  
  it('should handle CLOSE MODAL', () => {
    expect(globalReducer(initialState, {
      type: 'CLOSE_MODAL'
    })).toEqual({
      ...initialState,
      isModalOpen: false
    });
  });

  it('should handle CLEAR FIELD', () => {
    expect(globalReducer(initialState, {
      type: 'CLEAR_FIELD'
    })).toEqual({
      ...initialState,
      errors: {}
    });
  });
});
