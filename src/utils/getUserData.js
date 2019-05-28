const getAdminStatus = () => {
  const isAdmin = localStorage.getItem('isAdmin');
  return isAdmin;
}

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
}

export { getAdminStatus, getUser };
