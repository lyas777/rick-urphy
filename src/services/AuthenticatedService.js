const API_URL = 'http://localhost:3027/users';
const options = {
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
};

const SignIn = async (userToLogin) => {
  const response = await fetch(API_URL, options);
  const users = await response.json();
  let result = {};

  let userFilter = users.filter(
    (user) =>
      user.email === userToLogin.email &&
      user.password === btoa(userToLogin.password)
  );

  if (userFilter.length > 0) {
    result = {
      isAuthenticated: true,
      message: '',
      error: false,
      data: userFilter[0],
    };
  } else {
    result = {
      isAuthenticated: false,
      message: 'Usuario y/o contraseña incorrecta.',
      error: false,
    };
  }

  return result;
};

export { SignIn };
