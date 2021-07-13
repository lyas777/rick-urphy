import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import ApplicationContext from '../../context/ApplicationContext';
import { SignIn } from '../../services/AuthenticatedService';
import { validateEmail, validateText } from '../../utils/RegexValidations';
import './Login.css';

const Login = () => {
  const { refreshIsAuthenticated, showAlertMessage, refreshShowAlertMessage } =
    useContext(ApplicationContext);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  useEffect(() => {
    return () => {
      refreshShowAlertMessage({ visibility: false, message: '' });
    };
  }, []);

  const handleClickSignIn = async () => {
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

    if (email && password) {
      const userToLogin = {
        email,
        password,
      };

      const resultSignIn = await SignIn(userToLogin);
      if (resultSignIn.isAuthenticated) {
        localStorage.setItem('IS_AUTHENTICATED', resultSignIn.isAuthenticated);
        localStorage.setItem('USER_DATA', JSON.stringify(resultSignIn.data));
        localStorage.setItem('USER_ID', resultSignIn.data.id);
        refreshIsAuthenticated();
      } else {
        refreshShowAlertMessage({
          visibility: true,
          message: resultSignIn.message,
        });
      }
    } else {
      refreshShowAlertMessage({
        visibility: true,
        message:
          'Debe ingresar un correo y una contraseña para poder ingresar.',
      });
    }
  };

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    const isValid =
      nameInput === 'email'
        ? validateEmail(valueInput)
        : validateText(valueInput);
    let messageValidation =
      nameInput === 'email'
        ? 'El correo no es valido.'
        : 'La contraseña debe tener minimo 6 caracteres';
    if (!isValid) {
      refreshShowAlertMessage({
        visibility: true,
        message: messageValidation,
      });
    } else {
      refreshShowAlertMessage({
        visibility: false,
        message: '',
      });
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
          <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email@example.com"
              ref={refEmail}
              onChange={handleChangeInput}
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
              onChange={handleChangeInput}
            />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="d-grid gap-2 mx-auto">
            <button
              className="btn btn-lg btn-success"
              onClick={handleClickSignIn}
            >
              Ingresar
            </button>
            <Link className="btn btn-lg btn-primary" to="/register">
              Registrar
            </Link>
            {showAlertMessage.visibility ? (
              <AlertMessage message={showAlertMessage.message} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
