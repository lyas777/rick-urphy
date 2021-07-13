import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ApplicationContext from '../context/ApplicationContext';
import Layout from '../components/Layout/Layout';

const PrivateRouteHoc = ({ component: Component, path }) => {
  const { isAuthenticated } = useContext(ApplicationContext);
  return (
    <Route
      exact
      path={path}
      render={() =>
        isAuthenticated ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRouteHoc;
