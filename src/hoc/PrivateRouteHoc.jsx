import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout/Layout';

const PrivateRouteHoc = ({ component: Component, path }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
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
