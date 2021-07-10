import './Modal.css';

const Modal = ({ onClickCloseModal }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClickCloseModal}>
          X
        </button>
        <div className="modal-confirm">
          <h3>Titulo</h3>
          <p>Mensaje</p>
          <div>
            <button className="btn btn-success">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
