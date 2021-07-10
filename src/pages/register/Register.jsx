import { Link } from 'react-router-dom';
import { SignUp } from '../../services/AuthenticatedService';

const Register = () => {
  const handleClickSignUp = async () => {
    const userToRegister = {
      firstName: 'Toffee',
      lastName: 'Albino',
      email: 'toffee@toffee.com',
      password: '123456',
    };

    const resultSignUp = await SignUp(userToRegister);
    console.log(resultSignUp);
  };

  return (
    <div className="body-public">
      <div className="form-signin text-center">
        <div>
          <img
            src="https://jonmircha.com/img/category/react.svg"
            alt="Logo"
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Registar Usuario</h1>
          <div className="form-floating">
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Nombres"
            />
            <label htmlFor="firstName">Nombres</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Apellidos"
            />
            <label htmlFor="email">Apellidos</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email@example.com"
            />
            <label htmlFor="email">Correo Electronico</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="d-grid gap-2 mx-auto">
            <button
              className="btn btn-lg btn-success"
              onClick={handleClickSignUp}
            >
              Registar
            </button>
            <Link className="btn btn-lg btn-default" to="/login">
              Atras
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
