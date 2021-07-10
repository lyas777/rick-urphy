import { useState } from 'react';
import ApplicationContext from '../context/ApplicationContext';

const ApplicationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('IS_AUTHENTICATED')
  );

  const refreshIsAuthenticated = () => {
    setIsAuthenticated(!!localStorage.getItem('IS_AUTHENTICATED'));
  };

  const applicationContextValues = {
    isAuthenticated: isAuthenticated,
    refreshIsAuthenticated: refreshIsAuthenticated,
  };

  return (
    <ApplicationContext.Provider value={applicationContextValues}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
