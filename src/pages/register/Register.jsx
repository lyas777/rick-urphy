import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from '../../services/AuthenticatedService';

const Register = () => {
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleClickSignUp = async () => {
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

    if (firstName && lastName && email && password) {
      const userToRegister = {
        firstName,
        lastName,
        email,
        password,
      };

      const resultSignUp = await SignUp(userToRegister);
      console.log(resultSignUp);
    }
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
              ref={refFirstName}
            />
            <label htmlFor="firstName">Nombres</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Apellidos"
              ref={refLastName}
            />
            <label htmlFor="email">Apellidos</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email@example.com"
              ref={refEmail}
            />
            <label htmlFor="email">Correo Electronico</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              ref={refPassword}
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
