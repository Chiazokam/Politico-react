const getAdminStatus = () => {
  const isAdmin = localStorage.getItem('isAdmin');
  return isAdmin;
}

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

const isCandidate = () => {
  const isCandidate = JSON.parse(localStorage.getItem('isCandidate'));
  return isCandidate;
}

export { getAdminStatus, getUser, isCandidate };
