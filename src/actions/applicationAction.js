const actionIsAuthenticated = () => {
  return {
    type: 'refreshIsAuthenticated',
  };
};

const actionAlertMessage = (visibility = false, message = '') => {
  return {
    type: 'refreshAlertMessage',
    payload: {
      visibility: visibility,
      message: message,
    },
  };
};

const actionModal = (
  visibility = false,
  callback = () => {},
  title = '',
  subTitle = ''
) => {
  return {
    type: 'refreshModal',
    payload: {
      visibility: visibility,
      callback: callback,
      title: title,
      subTitle: subTitle,
    },
  };
};

export { actionIsAuthenticated, actionAlertMessage, actionModal };
