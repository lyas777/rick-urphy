import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import PublicRouteHoc from './hoc/PublicRouteHoc';
import PrivateRouteHoc from './hoc/PrivateRouteHoc';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouteHoc path="/login" component={Login} />
        <PublicRouteHoc path="/register" component={Register} />
        <PrivateRouteHoc path="/home" component={Home} />
        <PrivateRouteHoc path="/profile" component={Profile} />
        <PrivateRouteHoc path="/settings" component={Settings} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
