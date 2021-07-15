import './Modal.css';

const Modal = ({ callback, title, subTitle }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <button className="modal-close-button" onClick={callback}>
          X
        </button>
        <div className="modal-confirm">
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <div>
            <button className="btn btn-success" onClick={callback}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
