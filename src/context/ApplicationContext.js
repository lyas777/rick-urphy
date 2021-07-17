import { createContext } from 'react';

const ApplicationContext = createContext({
  isAuthenticated: false,
  refreshIsAuthenticated: () => {},
  showAlertMessage: {},
  refreshShowAlertMessage: () => {},
  modalIsOpen: {},
  refreshModalIsOpen: () => {},
});

export default ApplicationContext;
