import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ApplicationContext from '../context/ApplicationContext';

const PrivateRouteHoc = ({ component: Component, path }) => {
  const { isAuthenticated } = useContext(ApplicationContext);
  return (
    <Route
      exact
      path={path}
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRouteHoc;
