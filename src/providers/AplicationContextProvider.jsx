import { useState } from 'react';
import ApplicationContext from '../context/ApplicationContext';

const ApplicationContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('IS_AUTHENTICATED')
  );

  const [showAlertMessage, setShowAlertMessage] = useState({
    visibility: false,
    message: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState({
    visibility: false,
    callback: () => {},
    title: '',
    subTitle: '',
  });

  const refreshIsAuthenticated = () => {
    setIsAuthenticated(!!localStorage.getItem('IS_AUTHENTICATED'));
  };

  const refreshShowAlertMessage = ({ visibility, message }) => {
    setShowAlertMessage({
      visibility: visibility,
      message: message,
    });
  };

  const refreshModalIsOpen = ({ visibility, callback, title, subTitle }) => {
    setModalIsOpen({
      visibility: visibility,
      callback: callback,
      title: title,
      subTitle: subTitle,
    });
  };

  const applicationContextValues = {
    isAuthenticated: isAuthenticated,
    refreshIsAuthenticated: refreshIsAuthenticated,
    showAlertMessage: showAlertMessage,
    refreshShowAlertMessage: refreshShowAlertMessage,
    modalIsOpen: modalIsOpen,
    refreshModalIsOpen: refreshModalIsOpen,
  };

  return (
    <ApplicationContext.Provider value={applicationContextValues}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
