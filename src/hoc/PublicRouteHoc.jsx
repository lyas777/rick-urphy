import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ApplicationContext from '../context/ApplicationContext';

const PublicRouteHoc = ({ component: Component, path }) => {
  const { isAuthenticated } = useContext(ApplicationContext);
  return (
    <Route
      exact
      path={path}
      render={() => (isAuthenticated ? <Redirect to="/home" /> : <Component />)}
    />
  );
};

export default PublicRouteHoc;
