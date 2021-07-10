import './Modal.css';

const Modal = ({ onClickRedirectLogin, title, subTitle }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClickRedirectLogin}>
          X
        </button>
        <div className="modal-confirm">
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <div>
            <button className="btn btn-success" onClick={onClickRedirectLogin}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
