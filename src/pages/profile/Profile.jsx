import md5 from "md5";
import { GetUserById, UpdateUser } from "../../services/AuthenticatedService";
import Modal from "../../components/Modal/Modal";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionModal } from "../../actions/applicationAction";
import { validateEmail, validateText } from "../../utils/RegexValidations";
import { actionAlertMessage } from "../../actions/applicationAction";
import AlertMessage from "../../components/AlertMessage/AlertMessage";

const Profile = () => {
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);
  const modal = useSelector((state) => state.modal);
  const [userData, setUserData] = useState(undefined);
  const loadDataCurrentUser = async () => {
    const currentUserId = localStorage.getItem("USER_ID");
    const currentUser = await GetUserById(currentUserId);
    setUserData(currentUser);
  };
  const refEmail = useRef(null);
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refPassword = useRef(null);

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    if (nameInput === "email") {
      setUserData({
        ...userData,
        photoUrl: `https://www.gravatar.com/avatar/${md5(valueInput)}`,
        [nameInput]: valueInput,
      });
    } else {
      setUserData({
        ...userData,
        [nameInput]: valueInput,
      });
    }
    const isValid =
      nameInput === "email"
        ? validateEmail(valueInput)
        : validateText(valueInput);
    let messageValidation =
      nameInput === "email"
        ? "El correo no es valido."
        : "Debe ingresar mas de 6 caracteres.";
    if (!isValid) {
      dispatch(actionAlertMessage(true, messageValidation));
    } else {
      dispatch(actionAlertMessage());
    }
  };

  const closeModal = () => {
    dispatch(actionModal());
  };

  const handleSaveUserData = async () => {
    const currentUserId = localStorage.getItem("USER_ID");
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const email = refEmail.current?.value;
    const password = btoa(refPassword.current?.value);
    let userDataUpdate = {};

    if (firstName && lastName && email && password) {
      userDataUpdate = {
        firstName,
        lastName,
        email,
        password,
      };
    }
    const resultUpdate = await UpdateUser(currentUserId, userDataUpdate);
    if (resultUpdate) {
      dispatch(
        actionModal(
          true,
          closeModal,
          "Mensaje",
          "Información actualizada correctamente.😎"
        )
      );
    }
  };

  useEffect(() => {
    loadDataCurrentUser();
    dispatch(actionAlertMessage());
  }, [dispatch]);

  return (
    <>
      {modal.visibility ? (
        <Modal
          title={modal.title}
          subTitle={modal.subTitle}
          callback={modal.callback}
        />
      ) : null}
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Perfil</h1>
      </div>
      {userData ? (
        <div className="main-body">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={userData.photoUrl}
                      alt="gravatar"
                      className="rounded-circle p-1"
                      width="110"
                    />
                    <div className="mt-3">
                      <h4>{`${userData.firstName} ${userData.lastName}`}</h4>
                      <p className="text-secondary mb-1">{userData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Información:</h6>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Nombres</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        name="firstName"
                        value={userData.firstName}
                        className="form-control"
                        ref={refFirstName}
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Apellidos</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        name="lastName"
                        value={userData.lastName}
                        className="form-control"
                        ref={refLastName}
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Correo</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        className="form-control"
                        ref={refEmail}
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Contraseña</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="password"
                        name="password"
                        value={userData.password}
                        className="form-control"
                        ref={refPassword}
                        onChange={handleChangeInput}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {alertMessage.visibility ? (
            <AlertMessage message={alertMessage.message} />
          ) : null}
          <br />
          <div className="row">
            <div className="col">
              <button
                className="btn btn-lg btn-success float-end"
                onClick={handleSaveUserData}
                disabled={alertMessage.visibility}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h5>Cargando...</h5>
      )}
    </>
  );
};

export default Profile;
