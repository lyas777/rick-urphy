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

const SignUp = async (userToRegister) => {
  let result = {};
  const responseGet = await fetch(API_URL, options);
  const users = await responseGet.json();
  const usersFilter = users.filter(
    (user) => user.email === userToRegister.email
  );
  if (usersFilter.length > 0) {
    result = {
      error: false,
      message: 'El correo ingresado ya se encuentra registrado.',
      userExists: true,
    };
  } else {
    let optionsCreateUser = options;
    optionsCreateUser = {
      ...optionsCreateUser,
      method: 'POST',
      body: JSON.stringify({
        ...userToRegister,
        password: btoa(userToRegister.password),
      }),
    };

    const responsePost = await fetch(API_URL, optionsCreateUser);
    const dataUser = await responsePost.json();

    result = {
      error: false,
      userExists: false,
      data: dataUser,
      message: '',
    };
  }

  return result;
};

export { SignIn, SignUp };
