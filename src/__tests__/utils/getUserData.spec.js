import { getAdminStatus, getUser, tokenExpired } from '../../utils';

describe('Get admin status', () => {
  it('should return correct admin status', () => {
    const status = getAdminStatus();
    expect(status).toEqual(null);
  });

  it('should return correct user status', () => {
    const user = getUser();
    expect(user).toEqual(null);
  });

  it('should return token status', () => {
    const expired = tokenExpired('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU1OTEyNjQxOCwiZXhwIjoxNTU5Mjk5MjE4fQ.BGZQ-QKDDF4CPXtohBDzS7TQxuFZ1yCeY62q_DwklP0');
    expect(expired).toEqual(false);
  });
});
