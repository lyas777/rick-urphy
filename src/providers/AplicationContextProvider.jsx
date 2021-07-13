import { useState } from 'react';
import ApplicationContext from '../context/ApplicationContext';

const ApplicationContextProvider = (props) => {
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
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
