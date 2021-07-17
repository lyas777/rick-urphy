import { FaSignOutAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { actionIsAuthenticated } from '../../actions/applicationAction';

const Navbar = () => {
  const dispatch = useDispatch();
  const handleClickSignOut = () => {
    localStorage.removeItem('IS_AUTHENTICATED');
    localStorage.removeItem('USER_DATA');
    localStorage.removeItem('USER_ID');
    dispatch(actionIsAuthenticated());
  };

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
        <img
          src="https://jonmircha.com/img/category/react.svg"
          alt="Logo"
          width="72"
          height="57"
        />
        Milka
      </a>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <p className="nav-link px-3" onClick={handleClickSignOut}>
            Salir <FaSignOutAlt />
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
