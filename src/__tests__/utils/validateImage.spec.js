import { validateImage } from '../../utils';

describe('Validate Image', () => {
  it('should return true for the right image format', () => {
    const valid = validateImage({type: 'image/jpg'});
    expect(valid).toEqual({ valid:true, message:''});
  });

  it('should return false for the wrong image format', () => {
    const valid = validateImage({type: 'image/gif'});
    expect(valid).toEqual({
      valid: false,
      message: 'Invalid picture format'
    });
  });

  it('should return false for the wrong image format', () => {
    const valid = validateImage({size: 322097152});
    expect(valid).toEqual({
      valid: false,
      message: 'File size exceeds 2MB'
    });
  });
});
