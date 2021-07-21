import axios from "axios";
import md5 from "md5";

const API_URL = "http://localhost:3027/users";

const SignIn = async (userToLogin) => {
  const responseUsers = await axios.get(API_URL);
  const users = responseUsers.data;
  let result = {};

  let userFilter = users.filter(
    (user) =>
      user.email === userToLogin.email &&
      user.password === btoa(userToLogin.password)
  );

  if (userFilter.length > 0) {
    result = {
      isAuthenticated: true,
      message: "",
      error: false,
      data: userFilter[0],
    };
  } else {
    result = {
      isAuthenticated: false,
      message: "Usuario y/o contraseña incorrecta.",
      error: false,
    };
  }

  return result;
};

const SignUp = async (userToRegister) => {
  let result = {};
  const responseUsers = await axios.get(API_URL);
  const users = responseUsers.data;
  const usersFilter = users.filter(
    (user) => user.email === userToRegister.email
  );
  if (usersFilter.length > 0) {
    result = {
      error: false,
      message: "El correo ingresado ya se encuentra registrado.",
      userExists: true,
    };
  } else {
    const responseCreate = await axios.post(API_URL, {
      ...userToRegister,
      password: btoa(userToRegister.password),
    });
    const dataUser = responseCreate.data;

    result = {
      error: false,
      userExists: false,
      data: dataUser,
      message: "",
    };
  }

  return result;
};

const GetUserById = async (id) => {
  const responseGet = await axios.get(`${API_URL}/${id}`);
  const userData = responseGet.data;
  userData.photoUrl = `https://www.gravatar.com/avatar/${md5(userData.email)}`;
  return userData;
};

const UpdateUser = async (id, userToUpdate) => {
  const responseUpdate = await axios.put(`${API_URL}/${id}`, userToUpdate);
  const userUpdate = responseUpdate.data;

  return userUpdate;
};

export { SignIn, SignUp, GetUserById, UpdateUser };
