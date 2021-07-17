import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import { SignUp } from '../../services/AuthenticatedService';
import { validateEmail, validateText } from '../../utils/RegexValidations';
import Modal from '../../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionAlertMessage,
  actionModal,
} from '../../actions/applicationAction';

const Register = () => {
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);
  const modal = useSelector((state) => state.modal);
  const history = useHistory();
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleClickRedirectLogin = () => {
    history.push('/login');
  };

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
      if (resultSignUp.userExists) {
        dispatch(actionAlertMessage(true, resultSignUp.message));
      } else {
        if (resultSignUp.data) {
          dispatch(
            actionModal(
              true,
              handleClickRedirectLogin,
              'Felicitaciones 😁',
              'El usuario se registró correctamente.'
            )
          );
        }
      }
    } else {
      dispatch(
        actionAlertMessage(
          true,
          'Debes ingresar tus nombres, apellidos, correo y contraseña para poder regostrar.'
        )
      );
    }
  };

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    const isValid =
      nameInput === 'email'
        ? validateEmail(valueInput)
        : validateText(valueInput);

    const messageValidation =
      nameInput === 'email'
        ? 'Debe ingresar un correo válido.'
        : 'Debe ingresar mas de 6 caracteres.';
    if (!isValid && valueInput) {
      dispatch(actionAlertMessage(true, messageValidation));
    } else {
      dispatch(actionAlertMessage());
    }
  };

  return (
    <>
      {modal.visibility ? (
        <Modal
          callback={modal.callback}
          title={modal.title}
          subTitle={modal.subTitle}
        />
      ) : null}
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
                onChange={handleChangeInput}
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
                onChange={handleChangeInput}
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
                onClick={handleClickSignUp}
              >
                Registar
              </button>
              <Link className="btn btn-lg btn-default" to="/login">
                Atras
              </Link>
            </div>
            {alertMessage.visibility ? (
              <AlertMessage message={alertMessage.message} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
