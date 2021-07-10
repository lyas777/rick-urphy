import { createContext } from 'react';

const ApplicationContext = createContext({
  isAuthenticated: false,
  refreshIsAuthenticated: () => {},
});

export default ApplicationContext;
