const AlertMessage = ({ message }) => {
  return (
    <div className="alert alert-warning" role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;
