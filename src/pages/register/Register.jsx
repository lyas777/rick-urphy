import { useContext, useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import { SignUp } from '../../services/AuthenticatedService';
import { validateEmail, validateText } from '../../utils/RegexValidations';
import Modal from '../../components/Modal/Modal';
import ApplicationContext from '../../context/ApplicationContext';

const Register = () => {
  const {
    showAlertMessage,
    refreshShowAlertMessage,
    modalIsOpen,
    refreshModalIsOpen,
  } = useContext(ApplicationContext);
  const history = useHistory();
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  useEffect(() => {
    return () => {
      refreshShowAlertMessage({ visibility: false });
      refreshModalIsOpen({ visibility: false });
    };
  }, []);

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
        refreshShowAlertMessage({
          visibility: true,
          message: resultSignUp.message,
        });
      } else {
        if (resultSignUp.data) {
          refreshModalIsOpen({
            visibility: true,
            title: 'Felicitaciones 😁',
            subTitle: 'El usuario se registró correctamente.',
            callback: handleClickRedirectLogin,
          });
        }
      }
    } else {
      refreshShowAlertMessage({
        visibility: true,
        message:
          'Debes ingresar tus nombres, apellidos, correo y contraseña para poder regostrar.',
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

    const messageValidation =
      nameInput === 'email'
        ? 'Debe ingresar un correo válido.'
        : 'Debe ingresar mas de 6 caracteres.';
    if (!isValid && valueInput) {
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
    <>
      {modalIsOpen.visibility ? (
        <Modal
          callback={modalIsOpen.callback}
          title={modalIsOpen.title}
          subTitle={modalIsOpen.subTitle}
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
            {showAlertMessage.visibility ? (
              <AlertMessage message={showAlertMessage.message} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
