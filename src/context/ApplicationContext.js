import { createContext } from 'react';

const ApplicationContext = createContext({
  isAuthenticated: false,
  refreshIsAuthenticated: () => {},
  showAlertMessage: {},
  refreshShowAlertMessage: () => {},
  modalIsOpen: false,
  refreshModalIsOpen: () => {},
});

export default ApplicationContext;
